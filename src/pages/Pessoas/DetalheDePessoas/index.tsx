import { useNavigate, useParams } from 'react-router-dom';

import { LayoutBase } from 'layouts';
import FerramentasDeDetalhes from 'components/ferramentas-detalhe';

export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();

  const handleSave = () => {
    console.log('save');
  };

  const handleDelete = () => {
    console.log('delete');
  };

  return (
    <LayoutBase
      title='Detalhe de Pessoas'
      toolbar={
        <FerramentasDeDetalhes
          textoBotaoNovo='Nova'
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo={id !== 'nova'}
          mostrarBotaoApagar={id !== 'nova'}
          aoClicarEmSalvar={handleSave}
          aoClicarEmSalvarEFechar={handleSave}
          aoClicarEmApagar={handleDelete}
          aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
          aoClicarEmVoltar={() => navigate('/pessoas')}
        />
      }
    >
      <p>Detalhe de Pessoas Page {id}</p>
    </LayoutBase>
  );
};
