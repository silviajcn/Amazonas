import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProductsAsync, deleteProductAsync } from '../actions/actionProducts';
import { ContainerPrincipal, ContainerImg, ImgProduct, ContainerSecond, TitleProduct, ContainerTres, PUno, PDos, ContainerBtn, BtnDelete } from '../styles/AllProducts.elements';

const AllProducts = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.products);
    console.log(products)

    useEffect(() => {
        dispatch(listProductsAsync());
    }, []);
    
    return (
        <>
            {
                products.map((e, i) => (
                    <ContainerPrincipal key={i}>
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

                        <ContainerBtn>
                            <BtnDelete
                                type="button"
                                onClick={() => dispatch(deleteProductAsync(e.codeproduct))}>
                                <strong>Borrar producto</strong>
                            </BtnDelete>
                        </ContainerBtn>
                    </ContainerPrincipal>
                ))
            }
        </>
    )
}

export default AllProducts
