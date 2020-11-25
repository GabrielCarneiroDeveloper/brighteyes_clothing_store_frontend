interface Client {
  id: number;
  name: string;
  cpf: string;
  birthdate: string;
  status: ClientStatus;
  address: string;
}

enum ClientStatusEnum {
  ACTIVATED = 'ACTIVATED',
  DEACTIVATED = 'DEACTIVATED',
}

interface ClientStatus {
  id: number;
  name: ClientStatusEnum;
}

interface ClientCreateDTO extends Omit<Client, 'id' | 'status'> {
  status: number;
}
interface ClientDetailsDTO extends Client {}
interface ClientListDTO extends Client {}
interface ClientUpdateDTO extends Client {}

export {
  Client,
  ClientStatus,
  ClientStatusEnum,
  ClientListDTO,
  ClientCreateDTO,
  ClientUpdateDTO,
  ClientDetailsDTO,
};
