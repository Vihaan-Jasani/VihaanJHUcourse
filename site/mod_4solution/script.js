var names=new Array();
names[0]="Vihaan";
names[1]="Jasani";
names[2]="Jin";
names[3]="Enigma";
names[4]="Aarnav";
names[5]="Wankhede";
names[6]="Sameer";
names[7]="Bill";
names[8]="Jester";
names[9]="Einstien";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}