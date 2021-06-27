function parseCount(argument) {
    const parsed = Number.parseInt(argument, 10);
    const error = new Error('Невалидное значение');
   if (isNaN(parsed)) { 
    throw error;
}
   return parsed
     
}

function validateCount(argument) {
   try { parseCount(argument)
    } catch(e) {
    return e   
    }
    return parseCount(argument)
}

class Triangle {
 
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((this.a + this.b <= this.c) || (this.a + this.c <= this.b) || (this.b + this.c <= this.a)) {
        throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return (this.a + this.b + this.c);
    }   

    getArea() {
        const p = (this.a + this.b + this.c)/2;
        const s = Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c));
        return +s.toFixed(3);
    }
}

function getTriangle(a,b,c) {
    try { return new Triangle (a,b,c);
    }
    catch (e) {
        return {
            getPerimeter: function() {
                return ("Ошибка! Треугольник не существует");
            },
            getArea: function() {
                return ("Ошибка! Треугольник не существует");
            } 
        }
    }
}