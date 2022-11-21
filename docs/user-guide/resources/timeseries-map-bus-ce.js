var mqtt = require('mqtt');
const ACCESS_TOKEN = process.argv[2];

var client  = mqtt.connect('mqtt://demo.thingsboard.io',{
    username: ACCESS_TOKEN
});

client.on('connect', function () {
    console.log('Client connected!');
    console.log('Uploading gps data once per second...');
    setInterval(publishTelemetry, 1000);
    publishTelemetry();
});

var gpsData = [
	37.771210000,-122.510960000,
	37.771340000,-122.510980000,
	37.771340000,-122.510980000,
	37.771360000,-122.510850000,
	37.771380000,-122.510550000,
	37.771400000,-122.509900000,
	37.771410000,-122.509660000,
	37.771430000,-122.509360000,
	37.771430000,-122.509270000,
	37.771450000,-122.508840000,
	37.771490000,-122.507880000,
	37.771490000,-122.507780000,
	37.771530000,-122.507140000,
	37.771550000,-122.506690000,
	37.771560000,-122.506310000,
	37.771600000,-122.505640000,
	37.771650000,-122.504540000,
	37.771670000,-122.503990000,
	37.771700000,-122.503490000,
	37.771740000,-122.502430000,
	37.771790000,-122.501360000,
	37.771840000,-122.500290000,
	37.771870000,-122.499730000,
	37.771890000,-122.499210000,
	37.771940000,-122.498140000,
	37.771990000,-122.497070000,
	37.772000000,-122.496690000,
	37.772020000,-122.496350000,
	37.772030000,-122.496110000,
	37.772040000,-122.496000000,
	37.772040000,-122.495890000,
	37.772060000,-122.495440000,
	37.772090000,-122.494930000,
	37.772120000,-122.494160000,
	37.772130000,-122.493860000,
	37.772180000,-122.492790000,
	37.772200000,-122.492300000,
	37.772220000,-122.491840000,
	37.772230000,-122.491710000,
	37.772280000,-122.490630000,
	37.772330000,-122.489560000,
	37.772330000,-122.489470000,
	37.772360000,-122.489030000,
	37.772380000,-122.488490000,
	37.772430000,-122.487420000,
	37.772450000,-122.486980000,
	37.772480000,-122.486360000,
	37.772520000,-122.485280000,
	37.772560000,-122.484400000,
	37.772570000,-122.484300000,
	37.772570000,-122.484150000,
	37.772620000,-122.483140000,
	37.772680000,-122.482050000,
	37.772700000,-122.481370000,
	37.772710000,-122.481000000,
	37.772730000,-122.480740000,
	37.772770000,-122.479930000,
	37.772820000,-122.478860000,
	37.772870000,-122.477790000,
	37.772900000,-122.477110000,
	37.772920000,-122.476710000,
	37.772960000,-122.475650000,
	37.772990000,-122.474950000,
	37.773010000,-122.474580000,
	37.773060000,-122.473450000,
	37.773120000,-122.472330000,
	37.773140000,-122.471850000,
	37.773140000,-122.471730000,
	37.773150000,-122.471640000,
	37.773170000,-122.471260000,
	37.773190000,-122.470570000,
	37.773210000,-122.470190000,
	37.773230000,-122.469770000,
	37.773250000,-122.469370000,
	37.773260000,-122.469120000,
	37.773290000,-122.468490000,
	37.773300000,-122.468150000,
	37.773310000,-122.468050000,
	37.773310000,-122.467940000,
	37.773320000,-122.467740000,
	37.773350000,-122.467270000,
	37.773360000,-122.466980000,
	37.773360000,-122.466870000,
	37.773370000,-122.466610000,
	37.773390000,-122.466300000,
	37.773400000,-122.466000000,
	37.773400000,-122.465910000,
	37.773410000,-122.465790000,
	37.773430000,-122.465520000,
	37.773460000,-122.465210000,
	37.773490000,-122.464980000,
	37.773500000,-122.464910000,
	37.773460000,-122.464830000,
	37.773560000,-122.464070000,
	37.773580000,-122.463900000,
	37.773590000,-122.463810000,
	37.773600000,-122.463780000,
	37.773610000,-122.463670000,
	37.773660000,-122.463320000,
	37.773740000,-122.462700000,
	37.773770000,-122.462440000,
	37.773860000,-122.461730000,
	37.773870000,-122.461640000,
	37.773920000,-122.461260000,
	37.773970000,-122.460890000,
	37.774010000,-122.460570000,
	37.774110000,-122.459760000,
	37.774140000,-122.459490000,
	37.774270000,-122.458520000,
	37.774270000,-122.458440000,
	37.774270000,-122.458380000,
	37.774320000,-122.458270000,
	37.774340000,-122.458050000,
	37.774510000,-122.456680000,
	37.774560000,-122.456310000,
	37.774700000,-122.455280000,
	37.774760000,-122.454780000,
	37.774770000,-122.454670000,
	37.774770000,-122.454670000,
	37.774670000,-122.454650000,
	37.774670000,-122.454650000,
	37.774580000,-122.454640000,
	37.774300000,-122.454580000,
	37.774190000,-122.454560000,
	37.773700000,-122.454460000,
	37.772910000,-122.454310000,
	37.772620000,-122.454260000,
	37.772430000,-122.454220000,
	37.771980000,-122.454110000,
	37.771910000,-122.454100000,
	37.771760000,-122.454060000,
	37.771690000,-122.454050000,
	37.771620000,-122.454030000,
	37.771530000,-122.454010000,
	37.771380000,-122.453970000,
	37.771250000,-122.453950000,
	37.771100000,-122.453930000,
	37.771020000,-122.453920000,
	37.770920000,-122.453900000,
	37.770810000,-122.453890000,
	37.770660000,-122.453860000,
	37.770110000,-122.453750000,
	37.769560000,-122.453640000,
	37.769360000,-122.453600000,
	37.769250000,-122.453580000,
	37.769180000,-122.453560000,
	37.769090000,-122.453540000,
	37.768780000,-122.453480000,
	37.768250000,-122.453380000,
	37.768160000,-122.453360000,
	37.767820000,-122.453290000,
	37.767310000,-122.453190000,
	37.767160000,-122.453160000,
	37.767010000,-122.453130000,
	37.766760000,-122.453070000,
	37.766550000,-122.453030000,
	37.766550000,-122.453030000,
	37.766390000,-122.452990000,
	37.766390000,-122.452990000,
	37.766290000,-122.453720000,
	37.766180000,-122.454610000,
	37.766130000,-122.454980000,
	37.765960000,-122.456290000,
	37.765960000,-122.456340000,
	37.765960000,-122.456360000,
	37.765960000,-122.456380000,
	37.765960000,-122.456410000,
	37.765960000,-122.456460000,
	37.765940000,-122.456630000,
	37.765930000,-122.456700000,
	37.765920000,-122.456810000,
	37.765910000,-122.456930000,
	37.765910000,-122.457020000,
	37.765920000,-122.457160000,
	37.765930000,-122.457270000,
	37.765940000,-122.457360000,
	37.765950000,-122.457410000,
	37.765960000,-122.457470000,
	37.765980000,-122.457560000,
	37.766010000,-122.457660000,
	37.766070000,-122.457830000,
	37.766070000,-122.457830000,
	37.766120000,-122.457980000,
	37.766180000,-122.458180000,
	37.766190000,-122.458200000,
	37.766240000,-122.458400000,
	37.766270000,-122.458530000,
	37.766290000,-122.458600000,
	37.766300000,-122.458690000,
	37.766300000,-122.458880000,
	37.766300000,-122.458970000,
	37.766280000,-122.459470000,
	37.766270000,-122.459520000,
	37.766270000,-122.459560000,
	37.766280000,-122.459600000,
	37.766280000,-122.459630000,
	37.766290000,-122.459670000,
	37.766300000,-122.459700000,
	37.766310000,-122.459730000,
	37.766320000,-122.459750000,
	37.766330000,-122.459770000,
	37.766350000,-122.459800000,
	37.766390000,-122.459860000,
	37.766340000,-122.459970000,
	37.766290000,-122.460150000,
	37.766290000,-122.460230000,
	37.766280000,-122.460280000,
	37.766260000,-122.460330000,
	37.766250000,-122.460420000,
	37.766240000,-122.460520000,
	37.766230000,-122.460670000,
	37.766230000,-122.460800000,
	37.766230000,-122.460900000,
	37.766210000,-122.461110000,
	37.766170000,-122.462030000,
	37.766160000,-122.462170000,
	37.766150000,-122.462520000,
	37.766120000,-122.463260000,
	37.766090000,-122.464130000,
	37.766070000,-122.464350000,
	37.766070000,-122.464440000,
	37.766060000,-122.464620000,
	37.766030000,-122.465400000,
	37.765980000,-122.466470000,
	37.765940000,-122.467530000,
	37.765930000,-122.467680000,
	37.765890000,-122.468600000,
	37.765860000,-122.468980000,
	37.765830000,-122.469660000,
	37.765780000,-122.470740000,
	37.765770000,-122.471030000,
	37.765770000,-122.471140000,
	37.765760000,-122.471380000,
	37.765740000,-122.471820000,
	37.765690000,-122.472950000,
	37.765680000,-122.473220000,
	37.765670000,-122.473320000,
	37.765640000,-122.474070000,
	37.765590000,-122.475140000,
	37.765590000,-122.475400000,
	37.765580000,-122.475520000,
	37.765550000,-122.476200000,
	37.765500000,-122.477180000,
	37.765500000,-122.477280000,
	37.765490000,-122.477400000,
	37.765490000,-122.477440000,
	37.765490000,-122.477440000,
	37.765490000,-122.477490000,
	37.765470000,-122.477770000,
	37.765450000,-122.478340000,
	37.765450000,-122.478420000,
	37.765430000,-122.478870000,
	37.765400000,-122.479430000,
	37.765380000,-122.479810000,
	37.765350000,-122.480480000,
	37.765300000,-122.481570000,
	37.765300000,-122.481660000,
	37.765290000,-122.481950000,
	37.765260000,-122.482640000,
	37.765220000,-122.483570000,
	37.765210000,-122.483710000,
	37.765210000,-122.483810000,
	37.765190000,-122.484130000,
	37.765160000,-122.484780000,
	37.765120000,-122.485860000,
	37.765110000,-122.485960000,
	37.765100000,-122.486170000,
	37.765070000,-122.486930000,
	37.765020000,-122.488000000,
	37.765020000,-122.488100000,
	37.765000000,-122.488360000,
	37.764980000,-122.488970000,
	37.764970000,-122.489070000,
	37.764930000,-122.490150000,
	37.764920000,-122.490240000,
	37.764910000,-122.490490000,
	37.764880000,-122.491210000,
	37.764830000,-122.492290000,
	37.764790000,-122.493260000,
	37.764780000,-122.493350000,
	37.764740000,-122.494420000,
	37.764720000,-122.494730000,
	37.764710000,-122.495500000,
	37.764700000,-122.495630000,
	37.764690000,-122.495940000,
	37.764680000,-122.496260000,
	37.764670000,-122.496480000,
	37.764600000,-122.497490000,
	37.764590000,-122.497650000,
	37.764550000,-122.498720000,
	37.764500000,-122.499780000,
	37.764450000,-122.500870000,
	37.764440000,-122.501060000,
	37.764400000,-122.501930000,
	37.764360000,-122.502990000,
	37.764310000,-122.504080000,
	37.764260000,-122.505140000,
	37.764260000,-122.505250000,
	37.764220000,-122.506220000,
	37.764170000,-122.507280000,
	37.764120000,-122.508360000,
	37.764100000,-122.508850000,
	37.764100000,-122.509150000,
	37.764100000,-122.509440000,
	37.764090000,-122.509760000,
	37.764080000,-122.510200000,
	37.764070000,-122.510320000,
	37.764060000,-122.510430000,
	37.764030000,-122.510430000,
	37.764030000,-122.510430000,
	37.763960000,-122.510430000,
	37.763960000,-122.510290000,
	37.764070000,-122.510320000,
	37.764170000,-122.510320000,
	37.764410000,-122.510340000,
	37.764610000,-122.510350000,
	37.764780000,-122.510330000,
	37.764960000,-122.510310000,
	37.765340000,-122.510280000,
	37.765570000,-122.510260000,
	37.765840000,-122.510250000,
	37.765900000,-122.510250000,
	37.766140000,-122.510260000,
	37.766410000,-122.510260000,
	37.766620000,-122.510270000,
	37.767040000,-122.510310000,
	37.767270000,-122.510330000,
	37.767620000,-122.510390000,
	37.767670000,-122.510390000,
	37.767740000,-122.510410000,
	37.767840000,-122.510430000,
	37.768280000,-122.510530000,
	37.768620000,-122.510600000,
	37.768690000,-122.510620000,
	37.769020000,-122.510690000,
	37.769260000,-122.510730000,
	37.769420000,-122.510750000,
	37.770010000,-122.510830000,
	37.770340000,-122.510860000,
	37.770460000,-122.510870000,
	37.770930000,-122.510930000,
	37.770980000,-122.510930000,
];

var polygon ='[[37.770835, -122.510163],[37.771586, -122.495633],[37.772773, -122.471776],[37.773354, -122.461562],[37.774558, -122.454910],[37.767407, -122.454612],[37.766195, -122.466924],[37.765866, -122.477787],[37.764699, -122.509657]]';

var circle = '{"latitude": 37.770980000, "longitude":-122.510930000, "radius":700}';

var index = 0,
    speed = 40,
    status = "On route";
    stopTime = -5;
    runTime = 0;

client.on('message', function (topic, message) {
    console.log('request.topic: ' + topic);
    console.log('request.body: ' + message.toString());
    var requestId = topic.slice('v1/devices/me/rpc/request/'.length),
        messageData = JSON.parse(message.toString());
    if (messageData.method === 'setSoftwareVersion') {
        softwareVersion = messageData.params.value;
        console.log('New software version was successfylly updated!');
        client.publish('v1/devices/me/attributes', JSON.stringify({'softwareVersion': softwareVersion}));
    } else {
        client.publish('v1/devices/me/rpc/response/' + requestId, message);
    }
});

function publishTelemetry() {
    client.publish('v1/devices/me/telemetry', JSON.stringify({'latitude': gpsData[index], 'longitude': gpsData[index+1], 'coordinates': polygon,"speed": speed, "status": status, "radius": circle}));
    stopTime++;
    runTime++;

    if(stopTime % 20 == 0) {
        status = "On route";
    }
    if(status == "On route") {
        speed = (40 + Math.random()*5+Math.random()*20).toFixed(1)
    }

    if(runTime % 20 == 0) {
        status =  "At the stop";
        speed = 0;
    }
    if(status == "On route") {
        index += 2;
    }
    if(index == 684) {
        index = 0;
    }
}
