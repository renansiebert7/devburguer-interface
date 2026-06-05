import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Image } from '@phosphor-icons/react';
import { Container, Form, InputGroup, Label, LabelUpload, Input, CheckBox, Select, SubmitButton, CancelButton, ErrorMessage } from './styles';
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const schema = yup.object({
    name: yup.string().required('Digite o nome do produto'),
    price: yup.number().positive().required('Digite o preço do produto').typeError('Digite o preço do produto'),
    category: yup.object().required('Selecione uma categoria'),
    offer: yup.bool(),
    file: yup
        .mixed()
        .test('required', 'Selecione uma imagem', (value) => {
            return value && value.length > 0;
        }).test('fileSize', 'Carrregue um arquivo até 3MB', (value) => {
            return value && value.length > 0 && value[0].size <= 30000;
        }).test('type', 'Carregue apenas imagens PNG ou JPEG', (value) => {
            return value && value.length > 0 && (value[0].type === 'image/png' || value[0].type === 'image/jpeg');
        })
});

export function NewProduct() {
    const [file, setFile] = useState(null);
    const [categories, setCategories] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate();

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

        await toast.promise(api.post('/products', productFormData), {
            pending: 'Criando produto',
            success: 'Produto criado com sucesso! 🎉',
            error: 'Falha ao criar produto, tente novamente... 😢',
        });

        reset();
        setImagePreview(null);
    };

    function handleCancel() {
        reset();

        setImagePreview(null);
        setFile(null);
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input type="text" {...register('name')} />
                    <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number" {...register('price')} />
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
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder="Categorias"
                                menuPortalTarget={document.body}
                            />
                        )} />

                    <ErrorMessage>{errors?.category?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <CheckBox>
                        <Label>Produto em Oferta?</Label>
                        <input type="checkbox" {...register('offer')} />
                    </CheckBox>

                </InputGroup>

                <SubmitButton>Adicionar Produto</SubmitButton>
                <CancelButton onClick={handleCancel}>Cancelar Cadastro</CancelButton>
            </Form>
        </Container>
    );
}