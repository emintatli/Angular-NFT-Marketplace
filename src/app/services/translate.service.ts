import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TranslateService {
    languages = ['en', 'tr'];

    language = 'en';

    dictionary: { [key: string]: any } = {
        en: {
            languange: 'en',
            values: {
                main_subtitle: 'Discover unique NFT books and collectibles',
                main_title: 'Marketplace',
                create_button: 'Create',
                follow_us: 'Follow us',
                legal: 'Legal',
                privacy_policy: 'Privacy Policy',
                terms_conditions: 'Terms & Conditions',
                all_rights: 'All Rights Reserved.',
                connect: 'Connect',
                account: 'Account',
                wallet: 'Wallet',
                sale: 'Sale',
                profile: 'Profile',
                my_nfts: 'My NFTs',
                create: 'Create',
                buy: 'Buy',
                menu: 'Menu',
                cover_image: 'Cover Image',
                image_file_ipfs: 'Image File (Upload to IPFS)',
                details: 'Details',
                browse: 'Browse',
                uploaded: 'Uploaded',
                title: 'Title',
                description: 'Description',
                pdf_file_upload: 'PDF File (Upload to IPFS)',
                nft_minted: 'NFT minted successfully',
                nft_failed: 'NFT minting failed',
                general_err: 'Someting went wrong.',
                price: 'Price',
                seller: 'Seller',
                wanttoSell: 'Do you want to list this NFT on marketplace?',
                yes: 'Yes',
                no: 'No',
            },
        },
        tr: {
            languange: 'tr',
            values: {
                main_subtitle: 'Eşsiz NFT kitaplarını ve koleksiyonlarını keşfedin',
                main_title: 'Pazaryeri',
                create_button: 'Oluştur',
                follow_us: 'Bizi takip edin',
                legal: 'Yasal',
                privacy_policy: 'Gizlilik Politikası',
                terms_conditions: 'Şartlar ve koşullar',
                all_rights: 'Tüm hakları Saklıdır.',
                connect: 'Bağlan',
                account: 'Hesap',
                wallet: 'Cüzdan',
                sale: 'Satış',
                profile: 'Profil',
                my_nfts: 'NFT lerim',
                create: 'Oluştur',
                buy: 'Satın al',
                menu: 'Menü',
                cover_image: 'Kapak Resmi',
                image_file_ipfs: 'Görüntü Dosyası (IPFS e Yükle)',
                details: 'Detaylar',
                browse: 'Gözat',
                uploaded: 'Yüklendi',
                title: 'Başlık',
                description: 'Açıklama',
                pdf_file_upload: 'PDF Dosyası (IPFS e Yükle)',
                nft_minted: 'NFT başarıyla oluşturuldu',
                nft_failed: 'NFT oluşturma başarısız oldu',
                general_err: 'Someting went wrong.',
                price: 'Fiyat',
                seller: 'Satıcı',
                wanttoSell: 'Bu NFT yi pazarda listelemek istiyor musunuz?',
                yes: 'Evet',
                no: 'Hayır',
            },
        },
    };
    constructor() {}

    changeLang(value: any) {
        this.language = value;
    }
    translate(key: string): any {
        if (this.dictionary[this.language] != null) {
            return this.dictionary[this.language].values[key];
        }
    }
}
