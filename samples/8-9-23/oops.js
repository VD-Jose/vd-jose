class AirPodsProGen1{
    constructor (touchcontrol, Bandwidth){
        this.touchcontrol=touchcontrol;
        this.Bandwidth=Bandwidth;
    }
    listen(){
        console.log("this is AirpodGen1 without ANC");
    }
}

class case{
    constructor (holder, cap, light){
        this.holder=holder;
        this.cap=cap;
        this.light=light;
    }
}
class pods{
    constructor(mic, speaker,buds ){
        this.mic=mic;
        this.speaker=speaker;
        this.buds=buds;
    }
    
}
class port{
    constructor (externalsocket, Internalsocket){
        this.externalsocket=externalsocket;
        this.Internalsocket=Internalsocket;
    }

}

// inheritance and polymorphism

class AirPodsProGen2 extends AirPodsProGen1 {
    constructor(ANC, touchcontrol, Bandwidth){
        this.ANC=ANC;
    super(touchcontrol, Bandwidth)
    }
listen(){
    console.log("this is AirpodsGen2 with ANC" + this.ANC);
}
}

// Abstraction

class AirpodGen1 {
    constructor (charge, pair)
    charge(){
        return "Now airpod is charging";
    }
    pair(){
        return "Successfully connected with device";
    }
}
