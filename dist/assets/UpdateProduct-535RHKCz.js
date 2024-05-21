import{b as re,u as ie,r,t as d,j as e,B as f,S as C,s as F,R as ce}from"./index-BCta2iwk.js";import{C as P,d as oe}from"./card-x1ywVH_7.js";import{D as ne,a as de,b as me,c as xe,d as fe,e as he}from"./dialog-Cbf9pZRL.js";import{u as B,f as z,a as i,b as c,c as m,d as o,e as n,t as T}from"./zod-D9tdBR2H.js";import{I as u}from"./input-mh7JJ6NP.js";import{L as ue}from"./label-D3hEH840.js";import{S as M,a as U,b as L,c as K,d as R}from"./select-CD5XDIEa.js";import{I as g,S as je,g as pe}from"./image.services-CrBS0_lZ.js";import{T as ve,p as ge,i as we}from"./property.schema-CNfonr2l.js";import{B as Ne,C as be}from"./categories.services-BIRfYhm5.js";import{P as S}from"./products.services-ClCANeLJ.js";import{u as ye}from"./useCapitalize-CH2_f9x0.js";import{A as Ce}from"./arrow-left-CIgR4B0O.js";import{T as Se}from"./trash-2-Fv-IyTXX.js";import{C as Ie}from"./circle-check-big-Bq8s_kx7.js";import{B as De}from"./badge-x-BzcLBOcs.js";import"./index-BAguUWrr.js";function He(){const{id:G}=re(),I=ye(),D=ie(),h=Number(G),[O,H]=r.useState([]),[W,X]=r.useState(0),[_,q]=r.useState([]),[J,Q]=r.useState(0),[Y,w]=r.useState(""),[E,N]=r.useState({id:0,name:"",propertyId:0,deletedAt:""}),[A,b]=r.useState([]),[Z,p]=r.useState(!1),[l,$]=r.useState({}),[ee,k]=r.useState(0),a=B({resolver:T(ge),values:{type:"",business_type:"",title:"",short_description:"",long_description:"",street:"",city:"",state:"",zip:"",is_active:!0,price:0}}),v=B({resolver:T(we),defaultValues:{file:void 0}});r.useEffect(()=>{S.findOne(h).then(s=>{s.id>0&&($(s),a.setValue("type",s.type),a.setValue("business_type",s.business_type),a.setValue("title",s.title),a.setValue("short_description",s.short_description),a.setValue("long_description",s.long_description),a.setValue("street",s.street),a.setValue("city",s.city),a.setValue("state",s.state),a.setValue("zip",s.zip),a.setValue("price",s.price),a.setValue("is_active",!!s.is_active)),s.statusCode>399&&d({title:s.statusCode,description:s.message,variant:"destructive",duration:5e3}),s instanceof Error&&d({title:"Error",description:"500 Internal Server Error | "+s.message,variant:"destructive",duration:5e3})}),Ne.findAllUI().then(s=>{H(s),X(Math.random())}),be.findAllUI().then(s=>{q(s),Q(Math.random())})},[h,a]),r.useEffect(()=>{g.findByProperty(h).then(s=>{b(s)})},[h,ee]);function se(s){var V;const t=(V=_.find(x=>x.name===s.type))==null?void 0:V.color,j=s.is_active===!0?1:0,y={...s,color:t||"",is_active:j};S.update(h,y).then(x=>{x.statusCode===200&&d({title:x.statusCode,description:x.message,variant:"success",duration:5e3}),x.statusCode>399&&d({title:x.statusCode,description:x.message,variant:"destructive",duration:5e3}),x instanceof Error&&d({title:"Error",description:"500 Internal Server Error | "+x.message,variant:"destructive",duration:5e3})})}function te(s){g.create(h,s.file[0]).then(t=>{t instanceof Error&&d({title:"Error",description:"500 Internal Server Error | "+t.message,variant:"destructive",duration:5e3}),console.log(t),t.status<400&&(g.findByProperty(h).then(j=>{b(j)}),d({title:t.status,description:t.message,variant:"success",duration:5e3}),v.reset()),t.status>399&&d({title:t.status,description:t.message,variant:"destructive",duration:5e3})}).catch(t=>console.log(t))}function ae(s,t){t==="removeSoft"&&g.removeSoft(s).then(j=>{j.statusCode===200&&(b(A.filter(y=>y.id!==s)),k(Math.random()))}),t==="restore"&&console.log("restore"),t==="remove"&&g.remove(s).then(j=>{j.statusCode===200&&k(Math.random())}),p(!1)}function le(s){S.switchActive(h,s).then(t=>{t.statusCode===200&&d({title:t.statusCode,description:t.message,variant:"success",duration:5e3}),t.statusCode>399&&d({title:t.statusCode,description:t.message,variant:"destructive",duration:5e3}),t instanceof Error&&d({title:"Error",description:"500 Internal Server Error | "+t.message,variant:"destructive",duration:5e3})})}return e.jsxs("main",{className:"flex-1 overflow-y-auto",children:[e.jsxs("div",{className:"flex flex-row items-center justify-between px-8 pt-8",children:[e.jsx("h1",{className:"text-2xl font-normal text-slate-600",children:"Editar Propiedad"}),e.jsxs(f,{variant:"ghost",size:"sm",onClick:()=>D(-1),children:[e.jsx(Ce,{className:"mr-2 h-4 w-4"}),"Volver"]})]}),e.jsxs("div",{className:"mt-6 flex flex-col items-center justify-center px-8",children:[e.jsx(P,{className:"flex w-full flex-row py-8 md:w-[500px] lg:w-[650px]",children:e.jsx(oe,{className:"mx-0 w-full p-0",children:e.jsx(z,{...a,children:e.jsx("form",{onSubmit:a.handleSubmit(se),className:"space-y-8",children:e.jsxs("div",{className:"container mx-auto space-y-4",children:[e.jsxs("div",{className:"flex w-full flex-col font-semibold text-slate-800",children:["Descripción",e.jsx(C,{className:"mt-2"})]}),e.jsx("div",{className:"flex py-4 text-xs font-bold uppercase text-slate-500",children:e.jsx("div",{className:"flex w-auto flex-row items-center rounded-sm bg-slate-200/70 px-2 py-1 text-sm leading-tight",children:(l==null?void 0:l.id)<10?"Cod/0"+(l==null?void 0:l.id):"Cod/"+(l==null?void 0:l.id)})}),e.jsxs("div",{className:"flex w-1/2 flex-col gap-4 md:w-2/3 md:flex-row md:gap-6",children:[e.jsx(i,{control:a.control,name:"business_type",render:({field:s})=>e.jsxs(c,{className:"w-full space-y-1",children:[e.jsx(m,{className:"font-semibold text-slate-500",children:"Tipo"}),e.jsxs(M,{value:s.value,onValueChange:t=>s.onChange(t),children:[e.jsx(o,{children:e.jsx(U,{children:e.jsx(L,{placeholder:""})})}),e.jsx(K,{children:O.map(t=>e.jsx(R,{value:t.name,className:"text-sm",children:I(t.name)},t.id))})]},W),e.jsx(n,{})]})}),e.jsx(i,{control:a.control,name:"type",render:({field:s})=>e.jsxs(c,{className:"w-full space-y-1",children:[e.jsx(m,{className:"font-semibold text-slate-500",children:"Categoría"}),e.jsxs(M,{value:s.value,onValueChange:t=>s.onChange(t),children:[e.jsx(o,{children:e.jsx(U,{children:e.jsx(L,{placeholder:""})})}),e.jsx(K,{children:_.map(t=>e.jsx(R,{value:t.name,className:"text-sm",children:I(t.name)},t.id))})]},J),e.jsx(n,{})]})})]}),e.jsxs("div",{className:"flex flex-col gap-4 md:flex-row md:gap-6",children:[e.jsx("div",{className:"flex flex-row md:w-1/2 md:flex-col",children:e.jsx(i,{control:a.control,name:"title",render:({field:s})=>e.jsxs(c,{className:"w-full space-y-1",children:[e.jsx(m,{className:"font-semibold text-slate-500",children:"Título"}),e.jsx(o,{children:e.jsx(u,{placeholder:"",...s,value:s.value})}),e.jsx(n,{})]})})}),e.jsx("div",{className:"flex flex-row md:w-1/2 md:flex-col",children:e.jsx(i,{control:a.control,name:"short_description",render:({field:s})=>e.jsxs(c,{className:"w-full space-y-1",children:[e.jsx(m,{className:"font-semibold text-slate-500",children:"Descripción breve"}),e.jsx(o,{children:e.jsx(u,{placeholder:"",...s})}),e.jsx(n,{})]})})})]}),e.jsx("div",{className:"mt-4 flex flex-col",children:e.jsx(i,{control:a.control,name:"long_description",render:({field:s})=>e.jsxs(c,{className:"w-full space-y-1",children:[e.jsx(m,{className:"font-semibold text-slate-500",children:"Descripción extendida"}),e.jsx(o,{children:e.jsx(ve,{...s,className:"h-28"})}),e.jsx(n,{})]})})}),e.jsxs("div",{className:"flex w-full flex-col pt-4 font-semibold text-slate-800",children:["Dirección",e.jsx(C,{className:"mt-2"})]}),e.jsxs("div",{className:"flex flex-row gap-6 md:flex-row md:gap-6",children:[e.jsx("div",{className:"flex w-2/3 flex-row md:w-2/3 md:flex-col",children:e.jsx(i,{control:a.control,name:"street",render:({field:s})=>e.jsxs(c,{className:"w-full space-y-1",children:[e.jsx(m,{className:"font-semibold text-slate-500",children:"Calle"}),e.jsx(o,{children:e.jsx(u,{placeholder:"",...s,value:s.value})}),e.jsx(n,{})]})})}),e.jsx("div",{className:"flex w-auto flex-row md:w-1/3 md:flex-col",children:e.jsx(i,{control:a.control,name:"city",render:({field:s})=>e.jsxs(c,{className:"w-full space-y-1",children:[e.jsx(m,{className:"font-semibold text-slate-500",children:"Ciudad"}),e.jsx(o,{children:e.jsx(u,{placeholder:"",...s,value:s.value})}),e.jsx(n,{})]})})})]}),e.jsxs("div",{className:"flex flex-row gap-6 md:flex-row md:gap-6",children:[e.jsx("div",{className:"flex w-2/3 flex-row md:w-2/3 md:flex-col",children:e.jsx(i,{control:a.control,name:"state",render:({field:s})=>e.jsxs(c,{className:"w-full space-y-1",children:[e.jsx(m,{className:"font-semibold text-slate-500",children:"Provincia"}),e.jsx(o,{children:e.jsx(u,{placeholder:"",...s,value:s.value})}),e.jsx(n,{})]})})}),e.jsx("div",{className:"flex w-auto flex-row md:w-1/3 md:flex-col",children:e.jsx(i,{control:a.control,name:"zip",render:({field:s})=>e.jsxs(c,{className:"w-full space-y-1",children:[e.jsx(m,{className:"font-semibold text-slate-500",children:"Código Postal"}),e.jsx(o,{children:e.jsx(u,{type:"text",...s,value:s.value})}),e.jsx(n,{})]})})})]}),e.jsxs("div",{className:"flex flex-row place-items-center gap-6 md:flex-row md:gap-6",children:[e.jsx("div",{className:"flex w-2/3 flex-row md:w-1/3 md:flex-col",children:e.jsx(i,{control:a.control,name:"price",render:({field:s})=>e.jsxs(c,{className:"w-full space-y-1",children:[e.jsx(m,{className:"font-semibold text-slate-500",children:"Precio"}),e.jsx(o,{children:e.jsx(u,{type:"text",inputMode:"numeric",...s,value:s.value})}),e.jsx(n,{})]})})}),e.jsx("div",{className:"mt-8 flex w-2/3 flex-row md:w-2/3 md:flex-col",children:e.jsx(i,{control:a.control,name:"is_active",render:({field:s})=>e.jsxs(c,{className:"flex w-full justify-end",children:[e.jsx(o,{children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(je,{id:"is_active",defaultChecked:s.value,onCheckedChange:t=>le(t),className:"data-[state=checked]:bg-emerald-500 data-[state=unchecked]:bg-input"},+new Date),e.jsx(ue,{htmlFor:"is_active",children:"Activo"})]})}),e.jsx(n,{})]})})})]}),e.jsxs("div",{className:"flex flex-row justify-end space-x-4 pt-6",children:[e.jsx(f,{variant:"ghost",onClick:s=>{s.preventDefault(),D(-1)},children:"Cancelar"}),e.jsx(f,{type:"submit",variant:"default",children:"Guardar"})]})]})})})})}),e.jsxs("div",{className:"my-8 flex w-full flex-col md:w-[500px] lg:w-[650px]",children:[e.jsx("h1",{className:"font-semibold text-slate-800",children:"Gestión de imágenes"}),e.jsx(C,{className:"mt-2"}),e.jsxs("div",{className:"mt-6 grid gap-4",children:[A.map((s,t)=>e.jsx(P,{className:"px-2 py-2",children:e.jsxs("div",{className:"flex flex-row place-items-center justify-between",children:[e.jsxs("div",{className:"flex h-5 flex-row",children:[e.jsx("img",{src:pe(s.name)}),e.jsxs("h2",{className:"flex flex-row place-items-center pl-3 text-xs font-medium text-slate-900",children:["# ",t+1]})]}),e.jsx("div",{className:"hidden flex-row text-xs font-light text-slate-400 xs:block md:block lg:block",children:s.name}),e.jsxs("div",{className:"flex flex-row gap-2",children:[s.deletedAt===null?e.jsx(f,{onClick:()=>{p(!0),N({id:s.id,name:s.name,propertyId:s.propertyId,deletedAt:s.deletedAt}),w("removeSoft")},variant:"ghost",size:"miniIcon",className:"rounded-full border bg-white text-slate-400/70 shadow-sm hover:bg-white hover:text-rose-500",children:e.jsx(Se,{className:"h-4 w-4"})}):e.jsx(f,{onClick:()=>{p(!0),N({id:s.id,name:s.name,propertyId:s.propertyId,deletedAt:s.deletedAt}),w("restore")},variant:"ghost",size:"miniIcon",className:"rounded-full border bg-white text-slate-400/70 shadow-sm hover:bg-white hover:text-emerald-400",children:e.jsx(Ie,{className:"h-4 w-4"})}),F.getState().role===ce.ADMIN&&e.jsx(f,{onClick:()=>{p(!0),N({id:s.id,name:s.name,propertyId:s.propertyId,deletedAt:s.deletedAt}),w("remove")},variant:"ghost",size:"miniIcon",className:"rounded-full border bg-white text-slate-400/70 shadow-sm hover:bg-white hover:text-rose-500",children:e.jsx(De,{className:"h-5 w-5",strokeWidth:"1.5"})})]})]})},s.id)),e.jsx(ne,{open:Z,onOpenChange:p,children:e.jsxs(de,{children:[e.jsxs(me,{children:[e.jsx(xe,{children:"¿Estás realmente seguro?"}),e.jsx(fe,{children:"Esta acción es imposible de revertir."})]}),e.jsxs("div",{children:[e.jsxs("section",{className:"text-sm font-normal",children:["La imágen",e.jsx("span",{className:"text-md px-1 font-bold text-slate-900",children:E.name}),"de la propiedad",e.jsx("span",{className:"text-md px-1 font-bold uppercase text-slate-900",children:l.id<10?"Cod/0"+l.id:"Cod/"+l.id}),"se eliminará permanentemente de la base de datos."]}),e.jsx(he,{children:e.jsxs("div",{className:"mt-6 flex flex-row gap-4",children:[e.jsx(f,{variant:"ghost",onClick:()=>p(!1),children:"Cancelar"}),e.jsx(f,{variant:"delete",onClick:()=>ae(E.id,Y),children:"Eliminar"})]})})]})]})})]}),F.getState().userId===l.created_by&&e.jsx(z,{...v,children:e.jsxs("form",{onSubmit:v.handleSubmit(te),children:[e.jsx("div",{className:"mt-8 grid w-full max-w-sm items-center gap-1.5",children:e.jsx(i,{control:v.control,name:"file",render:()=>e.jsxs(c,{className:"w-full space-y-1",children:[e.jsx(m,{className:"font-semibold text-slate-500",children:"Agregar imágen"}),e.jsx(o,{children:e.jsx(u,{...v.register("file"),name:"file",type:"file",accept:"image/*",className:"w-full hover:cursor-pointer"})}),e.jsx(n,{})]})})}),e.jsxs("div",{className:"mt-8 flex flex-row justify-end space-x-4",children:[e.jsx(f,{variant:"ghost",onClick:s=>{s.preventDefault(),v.reset()},children:"Cancelar"}),e.jsx(f,{variant:"default",size:"default",className:"w-auto",type:"submit",children:"Guardar"})]})]})})]})]})]})}export{He as default};