const PI = 3.1415;

class Elipse
{
    constructor(radius1, radius2, centerX, centerY)
    {
        this.radius1 = +(radius1 || 0);
        this.radius2 = +(radius2 || 0);
        this.centerX = +(centerX || 0);
        this.centerY = +(centerY || 0);
    }

    get area()
    {
        return this.calcArea();
    }

    get length()
    {
        return this.calcLength();
    }

    calcArea()
    {
        return PI * this.radius1 * this.radius2;
    }

    calcLength()
    {
        return PI * (this.radius1 + this.radius2); 
    }

}

class Circle extends Elipse
{
    constructor(radius, centerX, centerY)
    {
        super(radius, radius, centerX, centerY);
    }
}

class FilledCircle extends Circle
{
    constructor(radius, centerX, centerY, backgroundColor)
    {
        super(radius, centerX, centerY);
        this.backgroundColor = backgroundColor;
    }
}

class Sphere extends Circle
{
    constructor(radius, centerX, centerY, centerZ)
    {
        super(radius,centerX, centerY);
        this.centerZ = +(centerZ || 0);
    }

    get volume()
    {
        return this.calcVolume();
    }

    calcVolume()
    {
        return 4/3 * PI * this.radius**3;
    }
}