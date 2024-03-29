// App
import { useLocaleDate } from '@/hooks/useLocaleDate';
import { useTruncateText } from '@/hooks/useTruncateText';
import { IProperty } from '@/lib/interfaces/property.interface';
import { DashboardServices } from '@/services/dashboard.services';
import { CalendarPlus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// React component
function LatestProperties({ limit, baseUrl }: { limit: number; baseUrl: string }) {
	const [latestProperties, setLatestProperties] = useState<IProperty[]>([]);
	const truncateText = useTruncateText();
	const localeDate = useLocaleDate();

	useEffect(() => {
		DashboardServices.getLatestProperties(limit).then((response) => {
			console.log(response[0].created_at);
			setLatestProperties(response);
		});
	}, [limit]);

	return (
		<section className='w-full'>
			<ul className='flex w-full flex-col gap-2'>
				{latestProperties?.map((property: IProperty) => {
					return (
						<li key={property.id} className='rounded-md border bg-slate-100/20 px-2 py-2 text-slate-700 transition-all hover:cursor-pointer hover:bg-slate-200/30 hover:text-black'>
							<Link to={`${baseUrl}/${property.id}`} className='flex w-full items-center'>
								<span className='rounded-sm bg-slate-200/70 px-1.5 py-1 text-xs font-bold uppercase leading-tight'>{`COD-${property.id < 10 ? '0' + property.id : property.id}`}</span>
								<span className='px-2 text-xs font-semibold'>{`${property.type} - ${property.business_type}`}</span>
								<span className='text-xs'>{truncateText(property.title, 35 - property.type.length - property.business_type.length)}</span>
								<span className='ml-auto flex items-center gap-1 px-2 text-xs'>
									<CalendarPlus className='h-4 w-4 text-emerald-500' />
									{localeDate(property.created_at)}
								</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
// Export React component
export default LatestProperties;
