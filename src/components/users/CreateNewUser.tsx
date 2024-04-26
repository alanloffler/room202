// Icons: Lucide (https://lucide.dev/)
import { ArrowLeft, Check } from 'lucide-react';
// UI: Shadcn-ui (https://ui.shadcn.com/)
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
// App
import { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UsersServices } from '@/services/users.services';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// react-hook-form schema
const formSchema = z.object({
	name: z.string().min(3, {
		message: 'El nombre debe poseer al menos 3 caracteres'
	}),
	email: z.string().email({ message: 'Formato de e-mail inválido' }),
	password: z.string().min(6, {
		message: 'El password debe poseer al menos 6 caracteres'
	}),
	phone: z.string().optional(),
	role: z.string().min(1, {
		message: 'Debes seleccionar un tipo'
	})
});
// .env constants
const APP_URL: string = import.meta.env.VITE_APP_URL;
// React component
function CreateNewUser() {
	const navigate = useNavigate();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			phone: '',
			role: ''
		}
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		UsersServices.create(values).then((response) => {
			if (response.statusCode === 200) {
				toast({ title: response.statusCode, description: response.message, variant: 'success', duration: 5000 });
				navigate(`${APP_URL}/usuarios`);
			}
			if (response.statusCode > 399) toast({ title: response.statusCode, description: response.message, variant: 'destructive', duration: 5000 });
			if (response instanceof Error) toast({ title: 'Error', description: '500 Internal Server Error | ' + response.message, variant: 'destructive', duration: 5000 });
		});
	}

	function handleCancel(event: FormEvent<HTMLButtonElement>) {
		event.preventDefault();
		navigate(`${APP_URL}/usuarios`);
	}

	return (
		<main className='flex-1 overflow-y-auto'>
			<div className='flex flex-row items-center justify-between px-8 pt-8'>
				<h1 className='text-2xl font-normal text-slate-600'>Crear Usuario</h1>
				<Button variant='ghost' size='sm' asChild>
					<Link to={`${APP_URL}/usuarios`}>
						<ArrowLeft strokeWidth='2' className='mr-2 h-4 w-4' />
						Volver
					</Link>
				</Button>
			</div>
			<div className='flex flex-row items-center justify-center px-6 pt-8'>
				<Card className='mb-8 w-full pt-6 md:w-[550px] lg:w-[550px]'>
					<CardContent className='mx-0 px-0'>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
								<div className='container mx-auto'>
									<div className='flex flex-col justify-between md:flex-row md:gap-10 lg:flex-row lg:gap-10'>
										<div className='flex w-full flex-col md:w-1/2 lg:w-1/2'>
											<FormField
												control={form.control}
												name='name'
												render={({ field }) => (
													<FormItem className='mb-4'>
														<FormLabel>Nombre</FormLabel>
														<FormControl>
															<Input placeholder='Mínimo 3 caracteres' {...field} />
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name='email'
												render={({ field }) => (
													<FormItem className='mb-4'>
														<FormLabel>E-mail</FormLabel>
														<FormControl>
															<Input placeholder='Formato de e-mail' {...field} />
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name='password'
												render={({ field }) => (
													<FormItem className='mb-4'>
														<FormLabel>Contraseña</FormLabel>
														<FormControl>
															<Input placeholder='Mínimo 6 caracteres' {...field} />
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>
										<div className='flex w-full flex-col md:w-1/2 lg:w-1/2'>
											<FormField
												control={form.control}
												name='phone'
												render={({ field }) => (
													<FormItem className='mb-4'>
														<FormLabel>Teléfono</FormLabel>
														<FormControl>
															<Input placeholder='Mínimo 10 números' {...field} />
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name='role'
												render={({ field }) => (
													<FormItem>
														<FormLabel>Tipo</FormLabel>
														<Select onValueChange={field.onChange} defaultValue={field.value}>
															<FormControl>
																<SelectTrigger>
																	<SelectValue placeholder='' />
																</SelectTrigger>
															</FormControl>
															<SelectContent>
																<SelectItem value='admin'>Administrador</SelectItem>
																<SelectItem value='user'>Usuario</SelectItem>
															</SelectContent>
														</Select>
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>
									</div>
								</div>
								<div className='flex flex-row items-center justify-end pr-6'>
									<div className='flex'>
										<Button variant='ghost' className='mr-4' onClick={handleCancel}>
											Cancelar
										</Button>
										<Button type='submit' variant='default' size='default'>
											<Check className='mr-2 h-4 w-4' />
											Guardar
										</Button>
									</div>
								</div>
							</form>
						</Form>
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
// Export React component
export default CreateNewUser;
