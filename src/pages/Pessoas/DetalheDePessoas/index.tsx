import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form } from '@unform/web';

// components
import FerramentasDeDetalhes from 'components/ferramentas-detalhe';
import { VTextField } from 'shared/forms';
import { LayoutBase } from 'layouts';

// services
import { PessoasService } from 'services/api';

// main
export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [nome, setNome] = useState('');

  useEffect(() => {
    if (id !== 'nova') {
      setIsLoading(true);
      PessoasService.getById(Number(id)).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
          navigate('/pessoas');
        } else {
          console.log(result);
          setNome(result.nomeCompleto);
        }
      });
    }
  }, [id]);

  const handleSave = () => {
    console.log('save');
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
          aoClicarEmSalvar={handleSave}
          aoClicarEmSalvarEFechar={handleSave}
          aoClicarEmApagar={() => handleDelete(Number(id))}
          aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
          aoClicarEmVoltar={() => navigate('/pessoas')}
        />
      }
    >
      <Form onSubmit={(dados) => console.log(dados)}>
        <VTextField name='nomeCompleto' />
        <button type='submit'>Submit</button>
      </Form>
    </LayoutBase>
  );
};
