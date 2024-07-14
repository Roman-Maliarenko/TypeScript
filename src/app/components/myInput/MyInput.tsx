import './myInput.module.css'

interface IMyInputProps{
    name?: string
    type?: 'text' | 'password' | 'email' | 'number'
    placeholder?: string
    label?: string
}

export default function MyInput({name= 'input', type='text', placeholder='default', label= 'default'}:IMyInputProps) {
    return (
        <>
        <label className='label'>{label}</label>
        <input type={type} name={name} placeholder={placeholder} />
        </>
        );
    }




