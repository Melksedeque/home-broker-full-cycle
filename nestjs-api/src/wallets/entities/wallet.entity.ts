import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import crypto from 'crypto';
import { WalletAsset, WalletAssetDocument } from './wallet-asset.entity';

export type WalletDocument = HydratedDocument<Wallet>;

@Schema({ timestamps: true })
export class Wallet {
  @Prop({ default: () => crypto.randomUUID() })
  _id: string;

  @Prop()
  amount: number;

  @Prop({
    type: [mongoose.Schema.Types.String],
    set: (v) => [...new Set(v)], // Remove duplicatas
    ref: WalletAsset.name, // Referenciando a classe WalletAsset com name
  })
  assets: WalletAssetDocument[] | string[];

  createdAt!: Date;
  updatedAt!: Date;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);
