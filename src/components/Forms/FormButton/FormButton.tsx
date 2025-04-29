import './FormButton.css'


interface ButtonProps {
    handle: () => void,
    text: string,
  }

export default function FormButton(params: ButtonProps) {
    return(
        <button className="button" onClick={params.handle}>
              {params.text}
        </button>
    )
}