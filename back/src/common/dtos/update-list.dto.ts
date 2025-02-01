import { IsString } from 'class-validator';

export class UpdateListDto {
  @IsString()
  readonly name: string;
}
