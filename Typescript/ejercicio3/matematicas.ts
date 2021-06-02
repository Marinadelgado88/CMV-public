class matematicas (){

    num1:number;
    num2:number;
    num3:number;

    constructor (n1:number, n2:number, n3:numer){
        this.num1=n1;
        this.num2=n2;
        this.num3=n3;
    }


    mayor():number {
        if ((this.num1>=this.num2)&&(this.num1>=this.num3)){
            return this.num1;
        }else{
            if(this.num2>=this.num3)
            return this.num2
            else
            return this.num3;
        }
    }

    sumar(...valores:number[]):number {
        var suma:number=0;
        for(let i:number=0; i<valores.length;i++)
        {
            suma += valores[i];
        }
        return suma;
    }
    static aleatorio(inicio:number, fin:number):number{
     return Math.floor((Math.random()*(fin+1-inicio))+inicio);   
    }  
        static 
        //calcula y muestra el número más alto de 3. 
    function calcularM (){

    }
    // suma un número ilimitado de enteros y devuelve el resultado . 
    function calcularS(){

    }
    //Devuelve un número aleatorio limitado entre n y m
    function calcularA(){

    }
}