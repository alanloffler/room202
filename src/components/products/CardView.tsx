// Icons: Lucide (https://lucide.dev/)
import { BadgeX, CalendarPlus, CheckCircle, FileText, MapPin, Pencil, Trash2 } from 'lucide-react';
// UI: Shadcn-ui (https://ui.shadcn.com/)
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogHeader, DialogFooter, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
// App
import CurrencyFormat from '@/components/shared/CurrencyFormat';
import { IDialog } from '@/lib/interfaces/dialog.interface';
import { IProperty } from '@/lib/interfaces/property.interface';
import { ProductsServices } from '@/services/products.services';
import { ReactElement, useState } from 'react';
import { Roles } from '@/lib/constants';
import { store } from '@/services/store.services';
import { useCapitalize } from '@/hooks/useCapitalize';
import { useNavigate } from 'react-router-dom';
import { useLocaleDate } from '@/hooks/useLocaleDate';
// import { FavoritesServices } from '@/services/favorite.services';
import FavButton from '../shared/FavButton';
// .env constants
const APP_URL: string = import.meta.env.VITE_APP_URL;
// React component
function CardView({ type, properties, getProducts }: { type?: string; properties: IProperty[]; getProducts: () => void }) {
	const [dialogAction, setDialogAction] = useState<string>('');
	const [openDialog, setOpenDialog] = useState<boolean>(false);
	const [propertyDialog, setPropertyDialog] = useState<IDialog>({ id: 0, name: '', title: '', subtitle: '', message: <span></span> });
	const capitalize = useCapitalize();
	const localeDate = useLocaleDate();
	const navigate = useNavigate();

	async function removeSoft(id: number) {
		ProductsServices.removeSoft(id).then((response) => {
			if (response.statusCode === 200) {
				toast({ title: response.statusCode, description: response.message, variant: 'success', duration: 5000 });
				getProducts();
			}
			if (response.statusCode > 399) toast({ title: response.statusCode, description: response.message, variant: 'destructive', duration: 5000 });
			if (response instanceof Error) toast({ title: 'Error', description: '500 Internal Server Error | ' + response.message, variant: 'destructive', duration: 5000 });
			setOpenDialog(false);
		});
	}

	async function restore(id: number) {
		ProductsServices.restore(id).then((response) => {
			if (response.statusCode === 200) {
				toast({ title: response.statusCode, description: response.message, variant: 'success', duration: 5000 });
				getProducts();
			}
			if (response.statusCode > 399) toast({ title: response.statusCode, description: response.message, variant: 'destructive', duration: 5000 });
			if (response instanceof Error) toast({ title: 'Error', description: '500 Internal Server Error | ' + response.message, variant: 'destructive', duration: 5000 });
			setOpenDialog(false);
		});
	}

	async function remove(id: number) {
		ProductsServices.remove(id).then((response) => {
			if (response.statusCode === 200) {
				toast({ title: response.statusCode, description: response.message, variant: 'success', duration: 5000 });
				getProducts();
			}
			if (response.statusCode > 399) toast({ title: response.statusCode, description: response.message, variant: 'destructive', duration: 5000 });
			if (response instanceof Error) toast({ title: 'Error', description: '500 Internal Server Error | ' + response.message, variant: 'destructive', duration: 5000 });
			setOpenDialog(false);
		});
	}

	// #region Dialog
	function handleDialog(property: IProperty, action: string) {
		let message: ReactElement | false = false;
		let subtitle: string = '';

		if (action === 'removeSoft') {
			subtitle = 'Esta acción es posible de revertir por el administrador';
			message = (
				<>
					La propiedad <span className='text-md font-bold text-slate-900'>{property.id < 10 ? `COD/0${property.id}` : `COD/${property.id}`}</span> va a ser eliminada de la base de datos.
				</>
			);
		}
		if (action === 'remove') {
			subtitle = 'Esta acción es imposible de revertir.';
			message = (
				<>
					La propiedad <span className='text-md font-bold text-slate-900'>{property.id < 10 ? `COD/0${property.id}` : `COD/${property.id}`}</span> va a ser eliminada permanentemente de la base de datos.
				</>
			);
		}
		if (action === 'restore') {
			subtitle = 'Esta acción es posible de revertir por el administrador';
			message = (
				<>
					La propiedad <span className='text-md font-bold text-slate-900'>{property.id < 10 ? `COD/0${property.id}` : `COD/${property.id}`}</span> va a ser restaurada de la base de datos.
				</>
			);
		}

		setOpenDialog(true);
		setPropertyDialog({
			id: Number(property.id),
			name: property.title,
			title: '¿Estás realmente seguro?',
			subtitle: subtitle,
			message: message
		});
		setDialogAction(action);
	}

	return (
		<>
			<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{properties.map((property: IProperty) => (
					<div className='animate-fadeIn' key={property.id}>
						<Card className='relative overflow-hidden rounded-md border-t-[4px]' style={{ borderTopColor: property.color }}>
							{property.deletedAt !== null && (
								<div className='absolute right-[-35px] top-[8px] flex w-[110px] rotate-45 transform justify-center bg-red-500 py-1 text-xs font-semibold text-white'>
									<Trash2 className='h-4 w-4' />
								</div>
							)}
							<div className=''>
								<div className='flex items-center justify-between p-4 pb-0'>
									<div className='flex flex-row items-center space-x-2 text-xs font-bold uppercase text-slate-500'>
										<div className='rounded-sm border bg-slate-200/70 px-2 py-1'>{property.id < 10 ? 'Cod/0' + property.id : 'Cod/' + property.id}</div>
										<div className=''>{property.type}</div>
									</div>
									<Button variant='ghost' size='miniIcon' className='hover:bg-transparent'>
                                        <FavButton property={property} height={22} />
									</Button>
								</div>
								<CardHeader onClick={() => navigate(`${APP_URL}/productos/${property.id}`)} className='space-y-2 rounded-sm p-4 hover:cursor-default'>
									<CardTitle className='text-md text-slate-800'>{property.title}</CardTitle>
									<CardDescription className='pb-1 text-sm'>{property.short_description}</CardDescription>
									<div className='flex flex-row text-slate-600'>
										<div className='flex flex-row items-center space-x-2'>
											<MapPin className='h-4 w-4' strokeWidth='1.5' />
											<span className='text-sm'>{`${property.street} - ${capitalize(property.city)}`}</span>
										</div>
									</div>
									{(store.getState().role === Roles.ADMIN || type === 'client') && (
										<div className='text-slate-600'>
											<div className='flex flex-row items-center space-x-2'>
												<Pencil className='h-4 w-4' strokeWidth='1.5' />
												<span className='text-sm'>{property.user?.name}</span>
											</div>
										</div>
									)}
									<div className='flex flex-row text-slate-600'>
										<div className='flex flex-row items-center space-x-2'>
											<CalendarPlus className='h-4 w-4' strokeWidth='1.5' />
											<span className='text-sm'>{localeDate(property.created_at)}</span>
										</div>
									</div>
								</CardHeader>
								<CardContent className='px-4 py-0 pb-4'>
									<div className='flex flex-row items-center justify-end space-x-4 text-sm font-semibold text-slate-700'>
										<div className='tracking-tight'>{capitalize(property.business_type)}</div>
										<CurrencyFormat value={property.price} locale='es-AR' digits={0} className='' />
									</div>
								</CardContent>
							</div>
							<CardFooter className='mt-auto justify-between gap-2 bg-slate-100 p-2'>
								<div className='flex items-center'>
									<div className={'flex h-4 w-4 items-center rounded-full border pl-1 ' + (property.is_active ? 'border-emerald-400 bg-emerald-300' : 'border-slate-300/50 bg-input')}>
										<span className='flex items-center pl-5 text-xs font-normal text-slate-400/70'>{property.is_active ? 'Activo' : 'Inactivo'}</span>
									</div>
								</div>
								<div className='flex items-center space-x-2'>
									<TooltipProvider>
										<Tooltip>
											<TooltipTrigger asChild>
												<Button onClick={() => navigate(`${APP_URL}/productos/${property.id}`)} variant='ghost' size='miniIcon' className='rounded-full border bg-white text-slate-400/70 shadow-sm hover:bg-white hover:text-sky-400'>
													<FileText className='h-4 w-4' />
												</Button>
											</TooltipTrigger>
											<TooltipContent>
												<p>Ver detalle</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
									{type !== 'client' && (
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger asChild>
													<Button onClick={() => navigate(`${APP_URL}/productos/modificar/${property?.id}`)} variant='ghost' size='miniIcon' className='rounded-full border bg-white text-slate-400/70 shadow-sm hover:bg-white hover:text-emerald-500'>
														<Pencil className='h-4 w-4' />
													</Button>
												</TooltipTrigger>
												<TooltipContent>
													<p>Editar</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									)}
									{property.deletedAt === null && type !== 'client' ? (
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger asChild>
													<Button onClick={() => handleDialog(property, 'removeSoft')} variant='ghost' size='miniIcon' className='rounded-full border bg-white text-slate-400/70 shadow-sm hover:bg-white hover:text-rose-400'>
														<Trash2 className='h-4 w-4' />
													</Button>
												</TooltipTrigger>
												<TooltipContent>
													<p>Eliminar</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									) : (
										type !== 'client' && (
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger asChild>
														<Button onClick={() => handleDialog(property, 'restore')} variant='ghost' size='miniIcon' className='rounded-full border bg-white text-slate-400/70 shadow-sm hover:bg-white hover:text-emerald-400'>
															<CheckCircle className='h-4 w-4' />
														</Button>
													</TooltipTrigger>
													<TooltipContent>
														<p>Restaurar</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										)
									)}
									{store.getState().role === Roles.ADMIN && type !== 'client' && (
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger asChild>
													<Button onClick={() => handleDialog(property, 'remove')} variant='outline' size='miniIcon' className='rounded-full border bg-white text-slate-400/70 shadow-sm hover:bg-white hover:text-rose-400'>
														<BadgeX className='h-5 w-5' strokeWidth='1.5' />
													</Button>
												</TooltipTrigger>
												<TooltipContent>
													<p>Eliminar permanente</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									)}
								</div>
							</CardFooter>
						</Card>
					</div>
				))}
			</div>
			{/* Dialog */}
			<Dialog open={openDialog} onOpenChange={setOpenDialog}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>{propertyDialog.title}</DialogTitle>
						<DialogDescription>{propertyDialog.subtitle}</DialogDescription>
					</DialogHeader>
					<section className='text-sm font-normal'>{propertyDialog.message}</section>
					<DialogFooter>
						<div className='mt-6 flex flex-row gap-4'>
							<Button variant='ghost' onClick={() => setOpenDialog(false)}>
								Cancelar
							</Button>
							{dialogAction === 'removeSoft' && (
								<Button variant='delete' onClick={() => removeSoft(propertyDialog.id)}>
									Eliminar
								</Button>
							)}
							{dialogAction === 'restore' && (
								<Button variant='default' onClick={() => restore(propertyDialog.id)}>
									Restaurar
								</Button>
							)}
							{dialogAction === 'remove' && (
								<Button variant='delete' onClick={() => remove(propertyDialog.id)}>
									Eliminar
								</Button>
							)}
						</div>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}

// Export React component
export default CardView;
