import React, { useState } from "react";

function Portifolio() {
    const [Image, setImage] = useState(null);

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    return (
        <div>
            <div className="Portifolio-body">

                <h2>Galeria Nome prestador</h2>

                <img className="C-img" alt={`Imagem ${index + 1}`} key={index} width='370px' height='340' src={URL.createObjectURL(Image)} />

                <div className="add-img">


                </div>

                <div className="Remove-img">
                    <button className="btn-del" onClick={() => setImage(null)}>Remover foto</button>
                </div>

            </div>
        </div>
    )


    export default function InputFileUpload() {
        return (
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
                Upload file
                <VisuallyHiddenInput type="file" />
            </Button>
        );
    }

}

export default Portifolio;