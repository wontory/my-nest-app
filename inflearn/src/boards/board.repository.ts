import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';

@EntityRepository(Board) // deprecated
export class BoardRepository extends Repository<Board> {}
