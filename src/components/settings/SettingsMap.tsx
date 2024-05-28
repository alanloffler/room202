// App
import MapCreateProduct from "@/components/settings/map/MapCreateProduct";
import MapId from "@/components/settings/map/MapId";
// React component
function SettingsMap() {
	return (
		<>
			<div className='mb-8 flex animate-fadeIn flex-col md:flex-row md:gap-6'>
				<div className='w-full p-2 md:w-1/2'>
					<div className='space-y-6'>
                        <MapCreateProduct />
                        <MapId />
                    </div>
				</div>
				<div className='w-full p-2 md:w-1/2'>
					<div className='space-y-4'>
                    </div>
				</div>
			</div>
			{/* <div className='flex w-full flex-col pb-8'><MapId /></div> */}
		</>
	);
}
// Export React component
export default SettingsMap;
