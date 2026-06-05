import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Image } from '@phosphor-icons/react';
import { Container, Form, InputGroup, Label, LabelUpload, Input, Select, SubmitButton, CancelButton, ErrorMessage, CheckBox } from './styles';
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const schema = yup.object({
    name: yup.string().required('Digite o nome do produto'),
    price: yup.number().positive().required('Digite o preço do produto').typeError('Digite o preço do produto'),
    category: yup.object().required('Selecione uma categoria'),
    offer: yup.bool(),
});

export function EditProduct() {
    const [file, setFile] = useState(null);
    const [categories, setCategories] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate();

    const {
        state: { product },
    } = useLocation();

    useEffect(() => {
        async function loadCategories() {
            try {
                const { data } = await api.get('/categories');
                setCategories(data.categories);

            } catch (error) {
                console.error("Erro ao buscar categorias:", error);
            }
        }

        loadCategories();
    }, []);

    const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async data => {
        const productFormData = new FormData();

        productFormData.append('name', data.name);
        productFormData.append('price', data.price * 100);
        productFormData.append('category_id', data.category.id);
        productFormData.append('file', data.file[0]);
        productFormData.append('offer', data.offer);

        await toast.promise(api.put(`/products/${product.id}`, productFormData), {
            pending: 'Editando produto',
            success: 'Produto editado com sucesso! 🎉',
            error: 'Falha ao editar produto, tente novamente... 😢',
        });

        setTimeout(() => {
            navigate('/admin/produtos');
        }, 2000);

        setImagePreview(null);
    };

    async function handleDelete() {
        const confirmDelete = window.confirm(
            `Deseja realmente excluir o produto "${product.name}"?`
        );

        if (!confirmDelete) return;

        try {
            await toast.promise(
                api.delete(`/products/${product.id}`),
                {
                    pending: 'Excluindo produto...',
                    success: 'Produto excluído com sucesso! 🎉',
                    error: 'Erro ao excluir produto 😢'
                }
            );

            navigate('/admin/produtos');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input type="text" {...register('name')} defaultValue={product.name} />
                    <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number" {...register('price')} defaultValue={product.price / 100} />
                    <ErrorMessage>{errors?.price?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <LabelUpload>
                        { }
                        <input
                            type="file"
                            {...register('file')}
                            accept="image/png, image/jpeg"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    setImagePreview(URL.createObjectURL(file));
                                }
                                register('file').onChange(e);
                            }}
                        />

                        {imagePreview ? (
                            <img src={imagePreview} alt="Preview do produto" className="preview-image" />
                        ) : (
                            <>
                                <Image />
                                <span>Upload do produto</span>
                            </>
                        )}
                    </LabelUpload>
                    <ErrorMessage>{errors?.file?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Categoria</Label>
                    <Controller
                        name="category"
                        control={control}
                        defaultValue={product.category}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder="Categorias"
                                menuPortalTarget={document.body}
                                defaultValue={product.category}
                            />
                        )} />

                    <ErrorMessage>{errors?.category?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <CheckBox>
                        <Label>Produto em Oferta?</Label>
                        <input type="checkbox" {...register('offer')} defaultChecked={product.offer} />
                    </CheckBox>

                </InputGroup>

                <SubmitButton>Editar Produto</SubmitButton>
                <CancelButton type="button" onClick={handleDelete}>Excluir Produto</CancelButton>
            </Form>
        </Container>
    );
}