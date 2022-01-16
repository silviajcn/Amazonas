import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProductsAsync, deleteProductAsync, showDetailProductAsync } from '../actions/actionProducts';
import { ContainerPrincipal, BtnShowDetail, ContainerImg, ImgProduct, ContainerSecond, TitleProduct, ContainerTres, PUno, PDos, ContainerBtn, BtnDelete } from '../styles/AllProducts.elements';

const AllProducts = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.products);
    console.log(products)

    useEffect(() => {
        dispatch(listProductsAsync());
        dispatch(showDetailProductAsync())
    }, []);
    
    return (
        <>
            {
                products.map((e, i) => (
                    <ContainerPrincipal key={i}>
                        <BtnShowDetail onClick={() => dispatch(showDetailProductAsync(e.codeproduct))}>
                            <ContainerImg>
                                <ImgProduct src={e.oneimage} alt="producto" />
                            </ContainerImg>

                            <ContainerSecond>
                                <TitleProduct><strong>{e.nameproduct}</strong></TitleProduct>

                                <ContainerTres>
                                    <PUno>US$</PUno>
                                    <PDos><strong>{e.priceproduct}</strong></PDos>
                                </ContainerTres>

                                <ContainerTres>
                                    <p>Envío gratis a</p>
                                    <PDos><strong>Colombia</strong></PDos>
                                </ContainerTres>
                            </ContainerSecond>
                        </BtnShowDetail>
                        

                        {/* <ContainerBtn>
                            <BtnDelete
                                type="button"
                                value="Delete"
                                onClick={() => dispatch(deleteProductAsync(e.codeproduct))}>
                                <strong>Borrar producto</strong>
                            </BtnDelete>
                        </ContainerBtn> */}
                    </ContainerPrincipal>
                ))
            }
        </>
    )
}

export default AllProducts
