
import './Field.css'
export default function Field(params: any) {
    return(
        <div className="field">
            <label className="label-form">{params.name}</label>
              <input
                className="div"
                placeholder= {`Enter ${params.placeHolder}`}
                type="text"
              />
        </div>

    );
}