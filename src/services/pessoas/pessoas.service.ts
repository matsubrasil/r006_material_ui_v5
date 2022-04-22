import { apiInstance } from 'services/axios/instance';
import { Environment } from 'shared/environments';

interface IListagemPessoa {
  id: number;
  email: string;
  cidadeId: number;
  nomeCompleto: string;
}

interface IDetalhePessoa {
  id: number;
  email: string;
  cidadeId: number;
  nomeCompleto: string;
}

type TPessoasComTotalCount = {
  data: IListagemPessoa[];
  totalCount: number;
};

const getAll = async (
  page = 1,
  filter = ''
): Promise<TPessoasComTotalCount | Error> => {
  try {
    const urlRelativo = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
    // console.log('urlRelativo >>', urlRelativo);
    const { data, headers } = await apiInstance.get(urlRelativo);
    // console.log('data ==>', data);
    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count']) || data.length,
      };
    }
    return new Error('Erro ao listar os registros');
  } catch (error) {
    // console.error('Error =>', error);
    return new Error(
      (error as { message: string }).message || 'Erro ao listar os registros'
    );
  }
};

const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
  try {
    const { data } = await apiInstance.get(`/pessoas/${id}`);
    if (data) {
      return data;
    }
    return new Error('Erro ao consultar o registro');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao consultar o registro'
    );
  }
};

const create = async (
  dados: Omit<IDetalhePessoa, 'id'>
): Promise<number | Error> => {
  try {
    const { data } = await apiInstance.post<IDetalhePessoa>('/pessoas', dados);
    if (data) {
      return data.id;
    }
    return new Error('Erro ao criar o registro');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao criar o registro'
    );
  }
};

const updateById = async (
  id: number,
  dados: IDetalhePessoa
): Promise<void | Error> => {
  try {
    await apiInstance.put(`/pessoas/${id}`, dados);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao atualizar o registro'
    );
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await apiInstance.delete(`/pessoas/${id}`);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao apagar o registro'
    );
  }
};

export const PessoasService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
