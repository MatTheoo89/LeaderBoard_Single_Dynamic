window.addEventListener('onWidgetLoad', function (obj) {
    const mainBox = document.querySelector('#main-box');

    let fieldData=obj["detail"]["fieldData"];
    let player1 = {name: fieldData['Player1'], point: fieldData['PointPlayer1']};
    let player2 = {name: fieldData['Player2'], point: fieldData['PointPlayer2']};
    let player3 = {name: fieldData['Player3'], point: fieldData['PointPlayer3']};
    let player4 = {name: fieldData['Player4'], point: fieldData['PointPlayer4']};
    let player5 = {name: fieldData['Player5'], point: fieldData['PointPlayer5']};
    let player6 = {name: fieldData['Player6'], point: fieldData['PointPlayer6']};
    let player7 = {name: fieldData['Player7'], point: fieldData['PointPlayer7']};
    let player8 = {name: fieldData['Player8'], point: fieldData['PointPlayer8']};
    let player9 = {name: fieldData['Player9'], point: fieldData['PointPlayer9']};
    let player10 = {name: fieldData['Player10'], point: fieldData['PointPlayer10']};
    let player11 = {name: fieldData['Player11'], point: fieldData['PointPlayer11']};
    let player12 = {name: fieldData['Player12'], point: fieldData['PointPlayer12']};
    let player13 = {name: fieldData['Player13'], point: fieldData['PointPlayer13']};
    let player14 = {name: fieldData['Player14'], point: fieldData['PointPlayer14']};
    let player15 = {name: fieldData['Player15'], point: fieldData['PointPlayer15']};

    let players =[player1, player2, player3, player4, player5, player6,
                    player7, player8, player9, player10, player11, player12,
                    player13, player14, player15]
    
    let sortedPlayers = players.sort(
    (a1, b2) => (a1.point < b2.point) ? 1 : (a1.point > b2.point) ? -1 : 0);
  	
  	for (const player of sortedPlayers) {
        
      	if(player.name != ''){
            const template = 
                            `<div class="box">
                                <div class="box-name">
                                    <span class="name">${player.name}</span>
                                </div>
                                <div class="box-point">
                                    <span id="point" class="point">${player.point}</span>
                                </div>
                            </div>`;
                        mainBox.innerHTML += template;
            }
        
        }
});

window.addEventListener('onEventReceived', function (obj) {
    const mainBox = document.querySelector('#main-box');
    const point = document.querySelector('#point');
    const data = obj.detail.event.data;
    let badge = '';
    const message = data.text;

    if(data["badges"][0]["type"]){
    
        let badge = data["badges"][0]["type"];
        let command = message.split(" ")[0];
        let string = message.split(" ")[1];
      	console.log('{{chatCommand}}');

        if(command.toLowerCase() == "{{chatCommand}}" && ( badge === 'moderator' || badge === 'broadcaster')){
            let array_players_contrattino = string.split(",");
          	let players = [];

            for (const playerbefore of array_players_contrattino) {
                let player = playerbefore.split("-");
              	let obj_play = {name: player[0], point: parseInt(player[1])}
                players.push(obj_play);
            };
            
          let sortedPlayers = players.sort(
            (a1, b2) => (a1.point < b2.point) ? 1 : (a1.point > b2.point) ? -1 : 0);

			mainBox.innerHTML = null;
          
            for (const player of sortedPlayers) {

                if(player.name != ''){
                    const template = 
                            `<div class="box">
                                <div class="box-name">
                                    <span class="name">${player.name}</span>
                                </div>
                                <div class="box-point">
                                    <span id="point" class="point">${player.point}</span>
                                </div>
                            </div>`;
                    mainBox.innerHTML += template;
                };
            };  
        };
    };
});