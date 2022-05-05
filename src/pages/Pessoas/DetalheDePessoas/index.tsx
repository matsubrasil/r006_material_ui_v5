import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Grid, LinearProgress, Paper, Typography } from '@mui/material';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

// components
import FerramentasDeDetalhes from 'components/ferramentas-detalhe';
import { VTextField } from 'shared/forms';
import { LayoutBase } from 'layouts';

// services
import { PessoasService } from 'services/api';

//  interface Form
interface IFormData {
  email: string;
  nomeCompleto: string;
  cidadeId: number;
}

// main
export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [nome, setNome] = useState('');
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    // console.log('useEffect ==>');
    if (id !== 'nova') {
      setIsLoading(true);
      PessoasService.getById(Number(id)).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
          navigate('/pessoas');
        } else {
          console.log('result', result);
          setNome(result.nomeCompleto);
          formRef.current?.setData(result);
        }
      });
    }
  }, [id]);

  const handleSave = (dados: IFormData) => {
    setIsLoading(true);

    if (id === 'nova') {
      PessoasService.create(dados).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
        } else {
          navigate(`/pessoas/detalhe/${result}`);
        }
      });
    } else {
      PessoasService.updateById(Number(id), { id: Number(id), ...dados }).then(
        (result) => {
          setIsLoading(false);
          if (result instanceof Error) {
            alert(result.message);
          }
        }
      );
    }
  };

  const handleDelete = (id: number) => {
    if (confirm('Você tem certeza que deseja excluir?')) {
      PessoasService.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          confirm('Registro excluído com sucesso');
          navigate('/pessoas');
        }
      });
    }
  };

  return (
    <LayoutBase
      title={id === 'nova' ? 'Nova pessoa' : nome}
      toolbar={
        <FerramentasDeDetalhes
          textoBotaoNovo='Nova'
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo={id !== 'nova'}
          mostrarBotaoApagar={id !== 'nova'}
          aoClicarEmSalvar={() => formRef.current?.submitForm()}
          aoClicarEmSalvarEFechar={() => formRef.current?.submitForm()}
          aoClicarEmApagar={() => handleDelete(Number(id))}
          aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
          aoClicarEmVoltar={() => navigate('/pessoas')}
        />
      }
    >
      <Form ref={formRef} onSubmit={handleSave}>
        <Box
          margin={1}
          display='flex'
          flexDirection='column'
          component={Paper}
          variant='outlined'
        >
          <Grid container direction='column' padding={2} spacing={2}>
            {isLoading && (
              <Grid item>
                <LinearProgress variant='indeterminate' />
              </Grid>
            )}

            <Grid item>
              <Typography variant='h6'>Geral</Typography>
            </Grid>
            <Grid container item direction='row'>
              <Grid item xs={12} md={6} lg={4} xl={2}>
                <VTextField
                  label='Nome completo'
                  name='nomeCompleto'
                  fullWidth
                  disabled={isLoading}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container item direction='row'>
              <Grid item xs={12} md={6} lg={4} xl={2}>
                <VTextField
                  label='Email'
                  name='email'
                  fullWidth
                  disabled={isLoading}
                />
              </Grid>
            </Grid>
            <Grid container item direction='row'>
              <Grid item xs={12} md={6} lg={4} xl={2}>
                <VTextField
                  label='Código da cidade'
                  name='cidadeId'
                  fullWidth
                  disabled={isLoading}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Form>
    </LayoutBase>
  );
};
