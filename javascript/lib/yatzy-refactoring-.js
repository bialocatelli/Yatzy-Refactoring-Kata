class Yatzy {
    constructor(dado1, dado2, dado3, dado4, dado5) {
        this.dados = [
            dado1,
            dado2,
            dado3,
            dado4,
            dado5,
        ];
    }
}

const LADOS_DADOS = {
    lado1: 1,
    lado2: 2,
    lado3: 3,
    lado4: 4,
    lado5: 5,
    lado6: 6,
}

class UnsDoisTresQuatrosCincosSeis extends Yatzy{
    somaPontos = 0;

    constructor(dado1, dado2, dado3, dado4, dado5) {
        super(dado1, dado2, dado3, dado4, dado5);
        
    }

    uns() {
        for (let jogaDado = 0; jogaDado < this.dados.length; jogaDado++) {
            if (this.dados[jogaDado] == LADOS_DADOS.lado1) {
                this.somaPontos++;
            }
        }
        return this.somaPontos
    }

    dois() {
        for (let jogaDado = 0; jogaDado < this.dados.length; jogaDado++) {
            if (this.dados[jogaDado] == LADOS_DADOS.lado2) {
                this.somaPontos += 2;
            }
        }
        return this.somaPontos
    }

    tres() {
        for (let jogaDado = 0; jogaDado < this.dados.length; jogaDado++) {
            if (this.dados[jogaDado] == LADOS_DADOS.lado3) {
                this.somaPontos += 3;
            }
        }
        return this.somaPontos
    }

    quatros() {
        for (let jogaDado = 0; jogaDado < this.dados.length; jogaDado++) {
            if (this.dados[jogaDado] == LADOS_DADOS.lado4) {
                this.somaPontos += 4;
            }
        }
        return this.somaPontos
    }

    cincos() {
        for (let jogaDado = 0; jogaDado < this.dados.length; jogaDado++) {
            if (this.dados[jogaDado] == LADOS_DADOS.lado5) {
                this.somaPontos += 5;
            }
        }
        return this.somaPontos
    }

    seis() {
        for (let jogaDado = 0; jogaDado < this.dados.length; jogaDado++) {
            if (this.dados[jogaDado] == LADOS_DADOS.lado6) {
                this.somaPontos += 6;
            }
        }
        return this.somaPontos
    }

}

const yatzyGame = new Yatzy(1, 2, 3, 4, 5);
console.log(yatzyGame.dados); // Saída: [1, 2, 3, 4, 5]

const jogada1 = new UnsDoisTresQuatrosCincosSeis(2, 3, 5, 6, 2)
console.log(jogada1.dois()) // Saída: 4

