import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../services/api.js";
import Logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import {
    Container,
    LeftContainer,
    RightContainer,
    Title,
    Form,
    InputContainer,
    Link,
} from "./styles";
import { Button } from "../../components/Button";
import { useUser } from "../../hooks/UserContext";
import { toast } from "react-toastify";

export function Login() {
    const navigate = useNavigate();
    const { putUserData } = useUser();

    const schema = yup
        .object({
            email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória'),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        const { data: userData } = await toast.promise
            (api.post('/sessions',
                { email: data.email, password: data.password, }),
                {
                    pending: 'Verificando seus dados',
                    success: {
                        render() {
                            setTimeout(() => {
                                if (userData?.admin) {
                                    navigate('/admin/pedidos');
                                } else {
                                    navigate('/');
                                }
                            }, 2000);
                            return 'Login realizado com sucesso! 🎉';
                        },
                    },
                    error: 'Email ou Senha inválidos 🤯',
                },
            );

        putUserData(userData);
    };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-dev-burguer" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha.</span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors.email?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors.password?.message}</p>
                    </InputContainer>

                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Não possui conta? <Link to="/cadastro">Clique aqui.</Link></p>
            </RightContainer>
        </Container>
    )
}