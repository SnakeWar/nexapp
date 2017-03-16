angular.module('starter.controllers', [])
    .controller('MapCtrl', function ($scope) {
        $scope.map = {};
        $scope.latLng1 = null;

        var mapOptions1 = {
            center: new google.maps.LatLng(-5.5845379, -36.730328),
            zoom: 7,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };

        var icon = {
            url: "img/pin-map.png",
            scaledSize: new google.maps.Size(40, 40)/*,
             origin: new google.maps.Point(0,0),
             anchor: new google.maps.Point(0, 0)*/
        };

        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions1);

        /* Marcador Natal*/
        var natal = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(-5.8174936, -35.2334466),
            icon: icon
        });
        var infoWindow1 = new google.maps.InfoWindow({
            content: "<b>NATAL (MATRIZ)</b>" +
            "<br>RUA DOS CAICOS, 2305 - LOJA D, NSRA. NAZARÉ" +
            "<br>(84) 2030-4080"
        });
        google.maps.event.addListener(natal, 'click', function () {
            infoWindow1.open($scope.map, natal);
        });
        /* Marcador João Pessoa*/
        var jpessoa = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(-7.1421556, -34.8853253),
            icon: icon
        });
        var infoWindow2 = new google.maps.InfoWindow({
            content: "<b>JOÃO PESSOA</b>" +
            "<br>RUA ALCIDES BEZERRA, 693 CRUZ DAS ARMAS" +
            "<br>(83) 3242-0227" +
            "<br>(84) 99104-9940"
        });
        google.maps.event.addListener(jpessoa, 'click', function () {
            infoWindow2.open($scope.map, jpessoa);
        });
        /* Marcador Campina Grande*/
        var cgrande = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(-7.2415412, -35.893462),
            icon: icon
        });
        var infoWindow3 = new google.maps.InfoWindow({
            content: "<b>CAMPINA GRANDE</b>" +
            "<br>RUA PAPA JOÃO XXIII, 355 LIBERDADE" +
            "<br>(83) 3331-4411" +
            "<br>(84) 99106-2735"
        });
        google.maps.event.addListener(cgrande, 'click', function () {
            infoWindow3.open($scope.map, cgrande);
        });
        /* Marcador Fortaleza*/
        var fortaleza = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(-3.7624156, -38.5419236),
            icon: icon
        });
        var infoWindow4 = new google.maps.InfoWindow({
            content: "<b>FORTALEZA</b>" +
            "<br>RUA ARMANDO MONTEIRO, 333 VILA UNIÃO" +
            "<br>(85) 3256-3299" +
            "<br>(84) 99104-6558"
        });
        google.maps.event.addListener(fortaleza, 'click', function () {
            infoWindow4.open($scope.map, fortaleza);
        });
        /* Marcador Mossoró*/
        var mossoro = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(-5.1845379, -37.350328),
            icon: icon
        });
        var infoWindow5 = new google.maps.InfoWindow({
            content: "<b>MOSSORÓ</b>" +
            "<br>RUA JOÃO LUIZ G DE MELO, SN AEROPORTO" +
            "<br>(84) 99104-7310"
        });
        google.maps.event.addListener(mossoro, 'click', function () {
            infoWindow5.open($scope.map, mossoro);
        });
    })
    .controller('EntregaCtrl', function ($state, $stateParams, $scope) {
        $scope.entrega = {};
        $scope.entrega = $stateParams.entrega;
        console.log($scope.entrega);
    })
    .controller('EnvioCtrl', function ($state, $stateParams, $scope, $http) {
        $scope.entrega = {};
        $scope.entrega = $stateParams.entrega;
        console.log($scope.entrega);
        $scope.enviada = "CARREGANDO";
            function deuCerto(data){
                $scope.enviada = "MENSAGEM ENVIADA COM SUCESSO!";
                console.log('Enviado');
                console.log(data);
            }
            function deuErrado(erro){
                $scope.enviada = "MENSAGEM NÃO FOI ENVIADA!";
                console.log('Não Enviado');
                console.log(erro);
            }
            $http.post("http://nordesteexpresso.com.br/envio-app.php", {
                recipient:"contato@nordesteexpresso.com.br",
                subject:"Solicitação de Entrega pelo App",
                nome: $scope.entrega.nome,
                empresa: $scope.entrega.empresa,
                cpf_cnpj: $scope.entrega.cpfcnpj,
                telefone: $scope.entrega.telefone,
                email: $scope.entrega.email,
                servico: $scope.entrega.servico,
                estado_saida: $scope.entrega.estadosaida,
                Cidade_saida: $scope.entrega.cidadesaida,
                Bairro_saida: $scope.entrega.bairrosaida,
                Rua_saida: $scope.entrega.ruasaida,
                Numero_saida: $scope.entrega.numerosaida,
                Complementos_saida: $scope.entrega.complementosaida,
                estado_destino: $scope.entrega.estadodestino,
                Cidade_destino_destino: $scope.entrega.cidadedestino,
                Bairro_destino: $scope.entrega.bairrodestino,
                Rua_destino: $scope.entrega.ruadestino,
                Numero_destino: $scope.entrega.numerodestino,
                Complementos_destino: $scope.entrega.complementodestino,
                produto: $scope.entrega.produto,
                volume: $scope.entrega.volume,
                nf: $scope.entrega.nf,
                valor_nf: $scope.entrega.valornf,
                comentarios: $scope.entrega.comentarios
            }).then(deuCerto, deuErrado);
    });