'use strict';

/**
 * tagDictionary Value
 *
 * Description
 *   supported IntegrationFields tags
 */

angular.module('integrationsApp')
    .value('tagDictionary', {
        'customer|codcliente': 'ExternalCode',
        'customer|nomecliente': 'Name',
        'customer|cpfcnpj': 'CPFCNPJ',
        'customer|fone': 'Phone',
        'customer|celular': 'CellPhone',
        'customer|endereco': 'Address',
        'customer|bairro': 'Neighborhood',
        'customer|cidade': 'City',
        'customer|cep': 'ZipCode',
        'customer|uf': 'State',
        'customer|email': 'Email',
        'customer|endentrega': 'DeliveryAddress',
        'customer|observacoes': 'Observations',
        'company|rep_nomeempresa': 'Name',
        'company|rep_enderecoempresa': 'Address',
        'company|rep_bairroempresa': 'Neighborhood',
        'company|rep_cepenpresa': 'ZipCode',
        'company|rep_cidadeempresa': 'City',
        'company|rep_ufempresa': 'State',
        'company|rep_telefoneempresa': 'Phone',
        'company|rep_emailempresa': 'Email',
        'company|rep_contatoempresa': 'Owner'
    });