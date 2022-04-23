import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

// components
import { LayoutBase } from 'layouts';
import FerramentasDeDetalhes from 'components/ferramentas-detalhe';

// services
import { PessoasService } from 'services/api';
import { LinearProgress } from '@mui/material';

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
      {isLoading && <LinearProgress variant='indeterminate' />}
      <p>Detalhe de Pessoas Page {id}</p>
    </LayoutBase>
  );
};
