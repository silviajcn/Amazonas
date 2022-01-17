import React, { useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { fileUpload } from '../helpers/FileUpload';
import { useDispatch } from 'react-redux';
import { registerProductAsync, listProductsAsync } from '../actions/actionProducts';
import { FirstContainerForm, ContainerTitle, ContainerForm, ContainerBtnImgs, BtnImgs, Textarea, DataProduct, BtnAddProduct, FinishStep, LogoAmazonas } from '../styles/NewProducts.elements';

// Material UI-------------------
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Carga las imagenes del producto', 'Carga la información del producto', 'Envia la información'];

const NewProduct = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProductsAsync())
    }, [])

    const formik = useFormik({
        initialValues: {
            oneimage: "",
            twoimage: "",
            threeimage: "",
            banner: "",
            codeproduct: "",
            categoryproduct: "",
            nameproduct: "",
            marcaproduct: "",
            priceproduct: "",
            colorproduct: "",
            styleproduct: "",
            descripcionproduct: "",
            rate: "",
        },
        validationSchema: Yup.object({
            oneimage: Yup.string().required(),
            twoimage: Yup.string().required(),
            threeimage: Yup.string().required(),
            banner: Yup.string().required(),
            codeproduct: Yup.string().required(),
            categoryproduct: Yup.string().required(),
            nameproduct: Yup.string().required(),
            marcaproduct: Yup.string().required(),
            priceproduct: Yup.string().required(),
            colorproduct: Yup.string().required(),
            styleproduct: Yup.string().required(),
            descripcionproduct: Yup.string().required(),
            rate: Yup.string().required()
        }),
        onSubmit: (data) => {
            console.log(data);
            dispatch(registerProductAsync(data))
        },
    })

    //que funcione el click del boton que intercambio por el input
    const handlePictureClick1 = () => {
        document.querySelector('#imageone').click();
    }

    const handlePictureClick2 = () => {
        document.querySelector('#imagetwo').click();
    }

    const handlePictureClick3 = () => {
        document.querySelector('#imagethree').click();
    }

    const handlePictureClickBanner = () => {
        document.querySelector('#imagebanner').click();
    }

    //Capturar el evento de guardar la url de la imagen 1
    const handleFileChanged1 = (e) => {
        //console.log(e);
        //console.log(e.target.files);
        //console.log(e.target.files[0]);
        const file = e.target.files[0];
        //console.log(file);
            fileUpload(file)
            .then(response => {
                formik.initialValues.oneimage = response
                console.log(response);
            })
            .catch(e => {
                console.log(e.message);
            })
    }

    //Capturar el evento de guardar la url de la imagen 2
    const handleFileChanged2 = (e) => {
        const file = e.target.files[0];
            fileUpload(file)
            .then(response => {
                formik.initialValues.twoimage = response
                console.log(response);
            })
            .catch(e => {
                console.log(e.message);
            })
    }

    //Capturar el evento de guardar la url de la imagen 3
    const handleFileChanged3 = (e) => {
        const file = e.target.files[0];
            fileUpload(file)
            .then(response => {
                formik.initialValues.threeimage = response
                console.log(response);
            })
            .catch(e => {
                console.log(e.message);
            })
    }

    //Capturar el evento de guardar la url de la imagen banner
    const handleFileChangedBanner = (e) => {
        const file = e.target.files[0];
            fileUpload(file)
            .then(response => {
                formik.initialValues.banner = response
                console.log(response);
            })
            .catch(e => {
                console.log(e.message);
            })
    }



    // Material UI-------------------------------------------------------------
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

// //   const handleBack = () => {
// //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
// //   };

    const handleReset = () => {
    setActiveStep(0);
  };
    // Material UI-------------------------------------------------------------

    return (
        <FirstContainerForm>

            <ContainerTitle>
                <h1><strong>Vender en Amazonas</strong></h1>
            </ContainerTitle>

        {/* // Material UI--------------------------------------------------------------------- */}
        <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      
      <ContainerForm>
      <form className="form-group"
            onSubmit={formik.handleSubmit}>
                
            {
                activeStep === 0 &&
                <>
                     <ContainerBtnImgs>
                                <p><strong>Imagenes del producto</strong></p>

                                <div>
                                    <input
                                        id="imageone"
                                        type="file"
                                        className="form-control"
                                        placeholder="Agregar imagen 1 del producto"
                                        name="oneimage"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChanged1}
                                    />

                                    <BtnImgs
                                        onClick={() => handlePictureClick1()}
                                            type="button">
                                            <strong>Agregar imagen 1 del producto</strong>
                                    </BtnImgs>
                                </div>

                                <div>
                                    <input
                                        id="imagetwo"
                                        type="file"
                                        className="form-control "
                                        placeholder="Agregar imagen 2 del producto"
                                        name="twoimage"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChanged2}
                                        />

                                    <BtnImgs
                                        onClick={() => handlePictureClick2()}
                                        type="button">
                                            <strong>Agregar imagen 2 del producto</strong>
                                    </BtnImgs>
                                </div>

                                <div>
                                    <input
                                        id="imagethree"
                                        type="file"
                                        className="form-control "
                                        placeholder="Agregar imagen 3 del producto"
                                        name="threeimage"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChanged3}
                                         />

                                    <BtnImgs
                                        onClick={() => handlePictureClick3()}
                                        type="button">
                                            <strong>Agregar imagen 3 del producto</strong>
                                    </BtnImgs>
                                </div>

                                <div>
                                    <input
                                        id="imagebanner"
                                        type="file"
                                        className="form-control "
                                        placeholder="Agragar Banner publicitario del producto"
                                        name="banner"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChangedBanner}
                                    />

                                    <BtnImgs
                                        onClick={() => handlePictureClickBanner()}
                                        type="button">
                                        <strong>Agregar Banner publicitario del producto</strong>
                                    </BtnImgs>
                                </div>
                    </ContainerBtnImgs>   
                </>
            }
            
            {
                activeStep === 1 &&
                <>
                    <DataProduct>
                                <p><strong>Datos del producto</strong></p>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="codeproduct"
                                        autoComplete="off"
                                        placeholder="Codigo del producto"
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="categoryproduct"
                                        autoComplete="off"
                                        placeholder="Categoría del producto"
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="nameproduct"
                                        autoComplete="off"
                                        placeholder="Nombre del producto"
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="marcaproduct"
                                        autoComplete="off"
                                        placeholder="Marca del producto"
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div>
                                    <input
                                        type="number"
                                        className="form-control mt-2"
                                        name="priceproduct"
                                        autoComplete="off"
                                        placeholder="Precio del producto"
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="colorproduct"
                                        autoComplete="off"
                                        placeholder="Color del producto"
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="styleproduct"
                                        autoComplete="off"
                                        placeholder="Estilo del producto"
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div>
                                    <Textarea
                                        className="form-control mt-2"
                                        autoComplete="off"
                                        name="descripcionproduct"
                                        placeholder="Descripcion del producto"
                                        onChange={formik.handleChange}
                                    >   
                                    </Textarea>
                                </div>

                                <div>
                                    <input
                                        type="number"
                                        className="form-control mt-2"
                                        name="rate"
                                        autoComplete="off"
                                        placeholder="Puntuacion del producto (del 1 al 5)."
                                        min="1"
                                        max="5"
                                        onChange={formik.handleChange}
                                    />
                                </div>
                    </DataProduct>
                </>
            }
            
            {
                activeStep === 2 &&
                <>
                    {/* Boton enviar */}
                        <div className="d-grid gap-2 mx-auto mt-2">
                            <BtnAddProduct
                                value="Agregar producto"
                                type="submit"
                                className="btn"
                            />
                        </div>
                </>
            }
        </form>
        </ContainerForm>
                
            {activeStep === steps.length ? (
        <React.Fragment>
            <FinishStep>
                <p><strong>Completaste todos los pasos, ¡estas listo para vender tus productos en Amazonas!</strong></p>
                <LogoAmazonas src="https://res.cloudinary.com/silviajcn/image/upload/v1641583841/SPRING-3/logo-footer_zysgvs.png" alt="logo" />
            </FinishStep>
            
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
          </Box>
          <Button onClick={handleReset}>Reset</Button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            {/* <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Atras
            </Button> */}
            <Box sx={{ flex: '1 1 auto' }} />
            
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Terminaste' : 'Siguiente'}
            </Button>
          </Box>
        </React.Fragment>
        )}
        </Box>
        
        {/* // Material UI--------------------------------------------------------------------- */}

        </FirstContainerForm>
    )
}

export default NewProduct