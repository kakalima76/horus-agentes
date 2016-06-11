angular.module('app')

.service('produtosService', [function(){
	var produtos = 
	[
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Quadro Branco Porcelana'},
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Quadros de Aviso Feltro'},
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Quadros de Aviso Plástico'},
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Suporte para Projetor'},
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Telas de Projeção'},
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Outros utensílios art. apresentação'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Canetas C/ Base Fixa'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Canetas Detectoras'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Datadores / Numeradores'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Displays de Mesa'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Elásticos'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Estiletes'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Extratores de Grampos'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Fitas Adesivas'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Fitas p/ Calculadoras / Roletes'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Formulários Contínuos'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Grampeadores Alicate'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Grampeadores de Mesa'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Grampeadores Elétricos'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Grampeadores Mini'},
		{tipo: 'ARTE E PINTURA', produto: 'Acessórios para Artesanato'},
		{tipo: 'ARTE E PINTURA', produto: 'Adesivos e Decalques p/ Decorações'},
		{tipo: 'ARTE E PINTURA', produto: 'Argilas'},
		{tipo: 'ARTE E PINTURA', produto: 'Bexigas'},
		{tipo: 'ARTE E PINTURA', produto: 'Bombas para Bexigas'},
		{tipo: 'ARTE E PINTURA', produto: 'Brocais'},
		{tipo: 'ARTE E PINTURA', produto: 'Canetas para Tecidos'},
		{tipo: 'ARTE E PINTURA', produto: 'Cavaletes'},
		{tipo: 'ARTE E PINTURA', produto: 'Cortiças Escolares'},
		{tipo: 'ARTE E PINTURA', produto: 'Espetos para Churrasco'},
		{tipo: 'ARTE E PINTURA', produto: 'Giz de Cera Pastel'},
		{tipo: 'ARTE E PINTURA', produto: 'Gliters'},
		{tipo: 'ARTE E PINTURA', produto: 'Godes'},
		{tipo: 'ARTE E PINTURA', produto: 'Imãs Magnéticos'},
		{tipo: 'ARTE E PINTURA', produto: 'Impermeabilizantes para Papéis'},
		{tipo: 'ARTE E PINTURA', produto: 'Lantejoulas'},
		{tipo: 'ARTE E PINTURA', produto: 'Livros para colorir'},
		{tipo: 'ARTE E PINTURA', produto: 'Máquinas para Recortes - Acessórios'},
		{tipo: 'ARTE E PINTURA', produto: 'Massa Cerâmica'},
		{tipo: 'ARTE E PINTURA', produto: 'Massas Adesivas'},
		{tipo: 'ARTE E PINTURA', produto: 'Massas de Biscuit'},
		{tipo: 'ARTE E PINTURA', produto: 'Palitos para Sorvetes'},
		{tipo: 'ARTE E PINTURA', produto: 'Papel Mache'},
		{tipo: 'ARTE E PINTURA', produto: 'Pincéis e Trinchas'},
		{tipo: 'ARTE E PINTURA', produto: 'Pistolas para Cola Quente/Refil'},
		{tipo: 'ARTE E PINTURA', produto: 'Telas'},
		{tipo: 'ARTE E PINTURA', produto: 'Tinta Acrílica / Acessórios'},
		{tipo: 'ARTE E PINTURA', produto: 'Tinta Facial'},
		{tipo: 'ARTE E PINTURA', produto: 'Tinta Óleo / Acessórios'},
		{tipo: 'ARTE E PINTURA', produto: 'Tintas Aquarela'},
		{tipo: 'ARTE E PINTURA', produto: 'Tintas Guache'},
		{tipo: 'ARTE E PINTURA', produto: 'Tintas para Pintura a Dedo'},
		{tipo: 'ARTE E PINTURA', produto: 'Tintas para Tecidos'},
		{tipo: 'ARTE E PINTURA', produto: 'Tintas Plásticas'},
		{tipo: 'ARTE E PINTURA', produto: 'Tintas PVA'},
		{tipo: 'ARTE E PINTURA', produto: 'Tintas Relevo'},
		{tipo: 'ARTE E PINTURA', produto: 'TNT'},
		{tipo: 'ARTE E PINTURA', produto: 'Outros utensílios arte e pintura'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Adaptadores de Rede'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Adaptadores Wireless'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Anti-Vírus'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Bases Cooler p/ Notebook'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Baterias Externas'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Cabos de Áudio'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Cabos de Rede - Conectores'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Cabos HDMI'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Cabos para Computadores'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Câmeras de Segurança'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Capas Luva para Notebooks'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Capas para Computadores'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Capas para Impressoras'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Cartuchos & Toners'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Computadores'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Computadores All In One'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Equipamentos para Rede'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Estabilizadores 110v'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Filtros de Linhas'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Fones de Ouvido'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Fontes de Alimentação p/ Note'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Gravadores de Dvd'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'HD Externo Desktop'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Headphones (Fone de Ouvido)'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Hubs Usb'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Impressoras & Multifuncionais'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Internet Security'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Leitores de Código de Barras'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Limpeza de Computador/Periféricos'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Maletas para Notebooks'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Mesas para Notebooks'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Mídias & Drives'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Mochilas para Notebook'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Modem'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Modem Wireless'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Monitores - Suportes'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Monitores LED'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Mouse Pad'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Mouses C/ Fio'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Mouses S/ Fio'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Notebooks'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Proteção Completa - Suites'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Repetidores'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Roteadores'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Roteadores Wireless'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Scanners'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Scanners 3D'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Scanners para Cartões de Visitas'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Softwares'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Suportes para Notebooks'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Switch'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Tablets'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Tablets / iPad - Acessórios'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Teclados'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Teclados - Apoio'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'WebCams'},
		{tipo: 'ARTIGOS DE INFORMÁTICA', produto: 'Outros utensílios art. informática'},
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Apresentadores s/fio'},
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Cabos de Vídeo'},
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Canetas Laser'},
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Encadernação'},
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Encadernadoras / Perfuradoras'},
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Flip-Chart'},
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Guilhotinas - Refiladoras de Papel'},
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Lousas Interativas'},
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Painéis Metálicos'},
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Pincéis para Quadro Branco'},
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Plastificação'},
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Quadro Branco'},
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Quadro Branco Magnético'},
		{tipo: 'ARTIGOS PARA APRESENTAÇÃO', produto: 'Quadro Branco Planejamento'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Canetas Esferográficas'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Canetas Hidrográficas'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Canetas Hidrográficas P/ Colorir'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Canetas Luxo'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Canetas para CD/ DVD/BLU-RAY'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Canetas para Retroprojetores'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Canetas Roller Ball'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Canetas Técnicas'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Canetas Tinteiro'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Corretivos'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Grafites - Minas'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Lápis de Cor Aquarelável'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Lápis de Cor Redondo'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Lápis de Cor Sextavado'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Lápis de Cor Triangular'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Lápis Preto Redondo'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Lápis Preto Sextavado'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Lápis Preto Triangular'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Lápis Técnicos'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Lapiseiras'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Marca Texto'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Pincéis Atômicos'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Pincéis Marcador Permanente'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Reabastecedores'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Tintas / Recargas e Conversores'},
		{tipo: 'ARTIGOS PARA ESCRITA', produto: 'Outros utensílios art. escrita'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Agendas Diárias'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Alfinetes'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Almofadas para Carimbo'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Blocos'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Blocos Auto-Adesivo/ Flag / Post-it'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Blocos Cubo Lembrete'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Bobinas Auto-Copiativas PDV'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Bobinas para Calculadoras'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Bobinas para Fax'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Bobinas Térmicas ECF/Crédito/Ponto'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Cadeados'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Cadernos Executivos'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Carimbos'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Clips'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Colchetes'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Crachás - Cordões - Porta Crachás'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Grampeadores Rocama'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Grampos para Grampeadores'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Impressora Cartão PVC'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Impressora Cartão PVC - Suprimentos'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Impressos - Livro Fiscal'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Indices Telefônicos/Endereço'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Lacres'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Livros Ata'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Lupas para Leitura'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Malotes'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Molhadores de Dedo'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Pastas c/ Grampo Trilho'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Pastas em L'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Percevejos'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Perfuradores de Papel'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Porta Cartões de Visita'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Protetor de Cards / Crachá'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Pulseiras de identicação'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Quadros de Aviso Cortiça'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Refil para Agendas'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Sinetas'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Suporte p/Calendário de Mesa/Refis'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Tesouras'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Tintas para Carimbo'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Tintas para Numeradores e Datadores'},
		{tipo: 'ARTIGOS PARA ESCRITÓRIO', produto: 'Outros utensílios art. escritório'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Agendas'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Arquivos Mortos'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Caixas Organizadoras'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Clips Magnéticos'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Expositores'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Fichários'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Fichários para Cartões de Visitas'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Fichários para Fichas'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Fichas Pautadas - Índices'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Organizadores'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Organizadores de Chaves'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Organizadores de Fila'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Organizadores de Moedas'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Organizadores para Cabos/Fios'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Pastas Aba Elastico'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Pastas c/ 3 Grampos'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Pastas c/ Canaleta'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Pastas Catálogo'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Pastas Classificador'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Pastas Congresso'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Pastas Executiva'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Pastas Maletas'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Pastas Novaonda'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Pastas p/ Cardápio'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Pastas p/ Documentos'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Pastas Plásticas'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Pastas Porta Comanda'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Pastas Portifólio'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Pastas Sanfonadas'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Pastas Suspensas'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Pastas Zip'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Placas para Sinalização'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Porta Aviso'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Porta Cédulas e Moedas'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Porta Folhetos'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Porta Guarda Chuva'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Porta Lápis/Clips /Lembrete Aço'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Porta Lápis/Clips /Lembrete Aramado'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Porta Lápis/Clips /Lembrete Poliest'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Porta Livros / Revistas'},
		{tipo: 'ARTIGOS PARA ORGANIZAÇÃO', produto: 'Outros utensílios art. organização'},
		{tipo: 'ARTIGOS PARA TELEFONES', produto: 'Acessórios p/Elétrica e Telefonia'},
		{tipo: 'ARTIGOS PARA TELEFONES', produto: 'Audio Conferência'},
		{tipo: 'ARTIGOS PARA TELEFONES', produto: 'Fax - Filmes'},
		{tipo: 'ARTIGOS PARA TELEFONES', produto: 'Pen Drive Dual Drive'},
		{tipo: 'ARTIGOS PARA TELEFONES', produto: 'Smartphones'},
		{tipo: 'ARTIGOS PARA TELEFONES', produto: 'Smartphones / iPhone - Acessórios'},
		{tipo: 'ARTIGOS PARA TELEFONES', produto: 'Telefones'},
		{tipo: 'ARTIGOS PARA TELEFONES', produto: 'Telefones Celulares'},
		{tipo: 'ARTIGOS PARA TELEFONES', produto: 'Telefones com Headset'},
		{tipo: 'ARTIGOS PARA TELEFONES', produto: 'Telefones Sem Fio'},
		{tipo: 'ARTIGOS PARA TELEFONES', produto: 'Telefones Sem Fio C/ Ramal'},
		{tipo: 'ARTIGOS PARA TELEFONES', produto: 'Outros utensílios art. para telefones'},
		{tipo: 'BEBIDAS ALCÓOLICAS GARRAFA', produto: 'Cerveja Garrafa'},
		{tipo: 'BEBIDAS ALCÓOLICAS GARRAFA', produto: 'Destilados'},
		{tipo: 'BEBIDAS ALCÓOLICAS LATA', produto: 'Cerveja lata'},
		{tipo: 'BEBIDAS ALCÓOLICAS LATA', produto: 'Destilados'},
		{tipo: 'BEBIDAS NÂO ALCÓOLICAS', produto: 'Bebidas com gás'},
		{tipo: 'BEBIDAS NÂO ALCÓOLICAS', produto: 'Bebidas sem gás'},
		{tipo: 'PERECÍVEIS', produto: 'frutas e verduras'},
		{tipo: 'PERECÍVEIS', produto: 'carne para churrasco'},
		{tipo: 'PERECÍVEIS', produto: 'enlatadados'},
		{tipo: 'PERECÍVEIS', produto: 'outros perecíveis'},
		{tipo: 'UTENSÍLIOS PARA CARROÇAS', produto: 'Panela'},
		{tipo: 'UTENSÍLIOS PARA CARROÇAS', produto: 'Chapa'},
		{tipo: 'UTENSÍLIOS PARA CARROÇAS', produto: 'Pegador'},
		{tipo: 'UTENSÍLIOS PARA CARROÇAS', produto: 'Botijão grande'},
		{tipo: 'UTENSÍLIOS PARA CARROÇAS', produto: 'Botijão pequeno'},
		{tipo: 'UTENSÍLIOS PARA CARROÇAS', produto: 'Tapower'},
		{tipo: 'UTENSÍLIOS PARA CARROÇAS', produto: 'Fogareiro'},
		{tipo: 'UTENSÍLIOS PARA CARROÇAS', produto: 'outros utensílios carroça'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'Adaptadores p/ Tomada'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'Benjamim'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'Cordões Prolongadores'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'Equipamentos de Proteção Individual'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'Escadas'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'Estabilizadores Bivolt'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'Extensões Elétricas'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'Ferramentas para Manutençao'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'Lâmpadas'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'Lanternas'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'Luminárias'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'No-Breaks'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'Pilhas - Carregadores'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'Pilhas Recarregáveis'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'Protetores Anti-Raio'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'Protetores de Energia'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'Testadores de Tensão'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'Transformadores Elétricos'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'Trenas'},
		{tipo: 'ELÉTRICA E MANUTENÇÃO', produto: 'Outros elétrica e manutençao'},
		{tipo: 'ELETRÔNICOS', produto: 'Albuns Fotográficos'},
		{tipo: 'ELETRÔNICOS', produto: 'Caixas de Som'},
		{tipo: 'ELETRÔNICOS', produto: 'Caixas de Som C/ Sub Woofer'},
		{tipo: 'ELETRÔNICOS', produto: 'Caixas de Som Portáteis'},
		{tipo: 'ELETRÔNICOS', produto: 'Cartões de Memória Micro SD'},
		{tipo: 'ELETRÔNICOS', produto: 'Cartões de Memória Secure Digital'},
		{tipo: 'ELETRÔNICOS', produto: 'GPS'},
		{tipo: 'ELETRÔNICOS', produto: 'Headsets (Fone Ouvido c/ Microfone)'},
		{tipo: 'ELETRÔNICOS', produto: 'Leitores de Cartoes de Memória'},
		{tipo: 'ELETRÔNICOS', produto: 'Pilhas & Baterias'},
		{tipo: 'ELETRÔNICOS', produto: 'Projetor Multimídia'},
		{tipo: 'ELETRÔNICOS', produto: 'Outros eletrônicos'},
		{tipo: 'EMBALAGENS', produto: 'Amarrilhos'},
		{tipo: 'EMBALAGENS', produto: 'Aplicadores de Fitas Adesivas'},
		{tipo: 'EMBALAGENS', produto: 'Barbantes'},
		{tipo: 'EMBALAGENS', produto: 'Bases para Corte'},
		{tipo: 'EMBALAGENS', produto: 'Bobinas Plástico Bolha'},
		{tipo: 'EMBALAGENS', produto: 'Caixas de Papelão'},
		{tipo: 'EMBALAGENS', produto: 'Caixas para Correspondência'},
		{tipo: 'EMBALAGENS', produto: 'Caixas para Presentes'},
		{tipo: 'EMBALAGENS', produto: 'Colas de Alta Resistência'},
		{tipo: 'EMBALAGENS', produto: 'Espumas Protetoras'},
		{tipo: 'EMBALAGENS', produto: 'Fechos para Presentes'},
		{tipo: 'EMBALAGENS', produto: 'Filme Stretch'},
		{tipo: 'EMBALAGENS', produto: 'Fitas Adesivas Dupla Face'},
		{tipo: 'EMBALAGENS', produto: 'Fitas Adesivas Transparentes'},
		{tipo: 'EMBALAGENS', produto: 'Fitas para Decorações'},
		{tipo: 'EMBALAGENS', produto: 'Fitilhos para Presentes'},
		{tipo: 'EMBALAGENS', produto: 'Lâminas para Estilete'},
		{tipo: 'EMBALAGENS', produto: 'Papéis para Embalagem'},
		{tipo: 'EMBALAGENS', produto: 'Sacolas para Presentes'},
		{tipo: 'EMBALAGENS', produto: 'Sacos para Presentes'},
		{tipo: 'EMBALAGENS', produto: 'Sacos Plásticos'},
		{tipo: 'EMBALAGENS', produto: 'Suportes para Bobinas'},
		{tipo: 'EMBALAGENS', produto: 'Suportes para Fitas Adesivas'},
		{tipo: 'EMBALAGENS', produto: 'Tubos'},
		{tipo: 'EMBALAGENS', produto: 'Outras embalagens'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Aplicador de Etiquetas p/ CD e DVD'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Convites (Envelopes/Cartões)'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Envelopes Comercial 114x162'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Envelopes Oficio 114x229'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Envelopes para Convites'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Envelopes Plástico de Segurança'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Envelopes Saco Kraft'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Envelopes Saco Off Set'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Envelopes Vai-Vem'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Etiquetadores'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Etiquetas Adesivas Escolares'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Etiquetas em Papel Glossy'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Etiquetas para Balança'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Etiquetas para CD e DVD'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Etiquetas para Codificaçao Colorida'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Etiquetas para Etiquetador'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Etiquetas para Impressora Matricial'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Etiquetas para Impressoras Térmica'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Etiquetas para Ink-Jet/Laser'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Etiquetas para Preços'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Impresso Padronizado Form.Continuo'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Prendedores/Espetos para Papéis'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Reforços Autoadesivos'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Registradores A/Z'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Registradores A/Z Fantasia'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Registradores A/Z POKF'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Risque Rabisque - Kit Planejamento'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Rotuladores'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Rotuladores - Fitas'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Sacos Organizadores a Vácuo'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Suportes Adesivos Aplik'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Suportes Adesivos Command'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Suportes Adesivos Decorados'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Velcro Fixador'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Visores p/ Pastas Suspensas'},
		{tipo: 'ENVELOPES E ETIQUETAS', produto: 'Outros env. e etiquetas'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Acendedores'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Álcool em Gel Anti-Séptico'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Anti mofo'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Aromatizadores / Neutralizadores'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Baldes'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Cestos para Lixo'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Coletores de Copos Descartáveis'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Copos Descartáveis'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Dispenser de Papel'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Dispenser para Copos'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Esponjas'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Flanelas'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Guarda Chuvas / Sombrinhas'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Guardanapos'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Harpic'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Incensos'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Inseticida'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Lenços & Toalhas Umedecidas'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Lenços de Papel'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Limpa Pisos'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Limpadores de Persiana'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Lixeiras'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Luvas'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Mop'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Pá'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Panos'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Papéis Higiênicos'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Papel Toalha Bobina'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Papel Toalha Interfolha'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Rodos'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Rolo Adesivo Limpa Tecidos'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Saboneteiras'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Sabonetes Líquidos'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Sacos para Lixo'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Secadores de Mãos'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Seções'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Tapetes'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Vassouras'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Veja'},
		{tipo: 'HIGIENE E LIMPEZA', produto: 'Outros higiene e limpeza'},
		{tipo: 'JOGOS', produto: 'Caixas de Som Gamer'},
		{tipo: 'JOGOS', produto: 'Controles de Jogos P/ Smartphones'},
		{tipo: 'JOGOS', produto: 'Kit Mouse / Teclado Gamer'},
		{tipo: 'JOGOS', produto: 'Mouses Gamer C/ Fio'},
		{tipo: 'JOGOS', produto: 'Mouses Pad Gamer'},
		{tipo: 'JOGOS', produto: 'Playstation 2'},
		{tipo: 'JOGOS', produto: 'Playstation 2 - Acessórios'},
		{tipo: 'JOGOS', produto: 'Playstation 3'},
		{tipo: 'JOGOS', produto: 'Playstation 3 - Acessórios'},
		{tipo: 'JOGOS', produto: 'Playstation 4'},
		{tipo: 'JOGOS', produto: 'Teclados Gamer'},
		{tipo: 'JOGOS', produto: 'Xbox 360'},
		{tipo: 'JOGOS', produto: 'XBox 360 - Acessórios'},
		{tipo: 'JOGOS', produto: 'Xbox one'},
		{tipo: 'JOGOS', produto: 'Outros jogos'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Adesivos'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Agendas Escolares'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Apagadores / Limpadores'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Apontadores'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Aventais'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Blocos Escolares'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Blocos Técnicos'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Borrachas'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Cadernetas 1/8'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Cadernetas Apontamento'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Cadernos'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Cadernos Cartografia'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Cadernos Diversos'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Cadernos para Anotações'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Cadernos Univ.Capa Dura'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Cadernos Universitários Capa Flex.'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Carimbos Educacionais'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Colas Brancas'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Colas Coloridas'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Colas em Bastão'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Colas em Fita / Refil'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Colas Goma Arábica'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Colas para Isopor'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Colas para Madeira'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Colas Spray'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Colas Super Bonder'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Colas Transparentes'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Compassos'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Conjunto Escrita'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Contact'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Diários de Classe'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Dicionários'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Estojos Completos'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Estojos Escolares'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Fichários - Divisórias'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Fichários Colegial'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Fichários Universitários'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Fitas Decorativas Deco Rush'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Flautas'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Folhas em EVA'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Folhas para Fichário'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Garrafas Escolares'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Giz de Cera'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Giz Escolar'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Globos Terrestre'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Grampeadores Escolares'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Jogos Educativos'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Lancheiras'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Lupa'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Maletas / Kits para Colorir'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Massas para Modelar'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Massas Play Doh'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Mochilas - Infantil'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Mochilas - Juvenil'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Papel Sulfite'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Plásticos para Encapar'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Pranchetas'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Quadros Escolares'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Réguas de Alumínio'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Réguas de Poliestireno'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Réguas Diversas'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Réguas em Aço'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Tecidos Adesivo'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Tesouras Escolares'},
		{tipo: 'MATERIAL ESCOLAR', produto: 'Outros materiais escolares'},
		{tipo: 'MIDIAS', produto: 'Blu-Ray'},
		{tipo: 'MIDIAS', produto: 'CD-R'},
		{tipo: 'MIDIAS', produto: 'CD-RW'},
		{tipo: 'MIDIAS', produto: 'DVD-R'},
		{tipo: 'MIDIAS', produto: 'DVD-RW'},
		{tipo: 'MIDIAS', produto: 'DVD+R'},
		{tipo: 'MIDIAS', produto: 'DVD+RW'},
		{tipo: 'MIDIAS', produto: 'HD Externo - Capas'},
		{tipo: 'MIDIAS', produto: 'HD Externo Portátil'},
		{tipo: 'MIDIAS', produto: 'Pen Drive'},
		{tipo: 'MIDIAS', produto: 'Pen Drive 3 em 1'},
		{tipo: 'MIDIAS', produto: 'Porta CD/DVD'},
		{tipo: 'MIDIAS', produto: 'Porta CD/DVD'},
		{tipo: 'MIDIAS', produto: 'Outras mídias'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Apoio Ergonômico'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Aquecedores'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Ar Condicionado'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Armários'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Balanças'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Bebedouros e Purificadores de água'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Cadeiras Fixas'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Cadeiras Giratórias'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Cadeiras Longarinas'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Cadeiras Universitárias'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Carros p/Carga / Funcionais'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Climatizadores de Ar'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Cofres'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Desumidificadores'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Escrivaninhas'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Estantes'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Feltro Adesivo'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Fragmentadoras Partículas/Cross-cut'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Fragmentadoras Tiras/Strip-cut'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Gaveteiros de Chão'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Gaveteiros de Mesa'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Módulos Cubo em MDF'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Porta Certificados'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Porta Retratos'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Prateleiras'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Prateleiras - Protetores de Quina'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Protetor Adesivo'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Relógios de Parede'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Suportes para Cpu'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Umidificador / Purificador Ambiente'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Urnas'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Ventiladores / Circuladores de Ar'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Mesa'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Barraca'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Tabuleiro'},
		{tipo: 'MOVEIS E EQUIPAMENTOS', produto: 'Outros móveis e equipamentos'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Arquivos Pastas Suspensas'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Bobinas p/ Plotter'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Cartões de Visita'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Envelopes Plásticos PE'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Envelopes Plásticos PP'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Envelopes Plásticos PVC'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Envelopes Porta Documentos'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papéis para Presente Couchê'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Almaço'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Camurça'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Carbono'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Cartão'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Cartolina'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Color Set'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Crepon'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel de Seda'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Dobradura (Espelho)'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Duplicolor'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Especial'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Fotográfico'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Jornal'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Laminado'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel p/ Trabalhos Manuais'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Pedra'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Reciclado'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Sulfite (Chamequinho)'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Sulfite Cores'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Sulfite DANFE (Nfe)'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Tipo Celofane Bopp'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Papel Vegetal'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Transparências'},
		{tipo: 'PAPEIS E PASTAS', produto: 'Outros papeis e pastas'},
		{tipo: 'CARROÇA', produto: 'Pipoca'},
		{tipo: 'CARROÇA', produto: 'Milho'},
		{tipo: 'CARROÇA', produto: 'Cachorro-quente'},
		{tipo: 'CARROÇA', produto: 'Lanche'},
		{tipo: 'CARROÇA', produto: 'Batata-frita'},
		{tipo: 'CARROÇA', produto: 'Churrasco'},
		{tipo: 'CARROÇA', produto: 'Misto-quente'},
		{tipo: 'CARROÇA', produto: 'Amendoim torrado'},
		{tipo: 'CARROÇA', produto: 'Churros'},
		{tipo: 'CARROÇA', produto: 'Crepe'},
		{tipo: 'CARROÇA', produto: 'Pizza'},
		{tipo: 'CARROÇA', produto: 'Outra carroça'},
		{tipo: 'TRANSPORTE', produto: 'Burro sem rabo'},
		{tipo: 'TRANSPORTE', produto: 'Carrinho de feira'},
		{tipo: 'TRANSPORTE', produto: 'Carrinho de mercado'},
		{tipo: 'TRANSPORTE', produto: 'Carrinho de carga'},
		{tipo: 'TRANSPORTE', produto: 'Triciclo'},
		{tipo: 'TRANSPORTE', produto: 'Bicicleta'},
		{tipo: 'PEÇAS DE VESTUÁRIO', produto: 'Camisa'},
		{tipo: 'PEÇAS DE VESTUÁRIO', produto: 'Bermuda'},
		{tipo: 'PEÇAS DE VESTUÁRIO', produto: 'Meia'},
		{tipo: 'PEÇAS DE VESTUÁRIO', produto: 'Cinto'},
		{tipo: 'PEÇAS DE VESTUÁRIO', produto: 'Carteira'},
		{tipo: 'PEÇAS DE VESTUÁRIO', produto: 'Chinelo'},
		{tipo: 'PEÇAS DE VESTUÁRIO', produto: 'Saia e vestido'},
		{tipo: 'PEÇAS DE VESTUÁRIO', produto: 'Roupas íntimas'},
		{tipo: 'PEÇAS DE VESTUÁRIO', produto: 'Outras peças de vestuário'},
		{tipo: 'VEÍCULO', produto: 'Kombi'},
		{tipo: 'VEÍCULO', produto: 'Caminhão'},
		{tipo: 'VEÍCULO', produto: 'Ônibus'},
		{tipo: 'VEÍCULO', produto: 'Moto'},
		{tipo: 'ELETRODOMÉSTICO', produto: 'Micro-ondas'},
		{tipo: 'ELETRODOMÉSTICO', produto: 'Fogão'},
		{tipo: 'ELETRODOMÉSTICO', produto: 'Geladeira'},
		{tipo: 'ELETRODOMÉSTICO', produto: 'Televisor'},
		{tipo: 'ARTIGOS DE TOUCADOR', produto: 'bijouteria'},
		{tipo: 'ARTIGOS DE TOUCADOR', produto: 'perfume'},
		{tipo: 'ARTIGOS DE TOUCADOR', produto: 'maquiagem'},
		{tipo: 'ARTIGOS DIVERSOS', produto: 'quinquilharia'},
		{tipo: 'ARTIGOS DIVERSOS', produto: 'livro usado'},
		{tipo: 'ARTIGOS DIVERSOS', produto: 'peça de brechó'}
		
	]

	var get = function(){
		return produtos;
	}

	return {
		get: get
	}

}])