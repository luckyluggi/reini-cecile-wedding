import React from 'react';
import "./SuccessView.css"
import Card from './lib/Card';
import Container from './lib/Container';


const images = [
  `/images/example-1.jpg`,
  `/images/example-2.jpg`,
  `/images/example-3.jpg`
];

interface AlertProps  { 
}
function SuccessView(props: AlertProps) {
  return (
    <Container>
      <div className='success-view'>
          <Card images={images}>
            <h1>Herzlichen Glückwunsch!</h1>
            <p>
              Ihr habt es tatsächlich geschafft, das Geschenk auszupacken! Wir hoffen, es hat euch genauso viel Spaß gemacht wie uns, es zu verpacken.
            </p>
            <p>
              Aber halt, das war nur der Anfang! Das eigentliche Geschenk wartet noch auf euch. Um es zu bekommen, müsst ihr uns zu einer Grillfeier einladen. Wir freuen uns darauf, mit euch einen schönen Abend zu verbringen und euch das echte Geschenk persönlich zu überreichen.
            </p>
            <p>
              Gebt uns einfach Bescheid, wann ihr Zeit habt, und wir bringen nicht nur das Geschenk, sondern auch gute Laune und Hunger mit!
            </p>
            <p>
              <strong>Herzliche Grüße und noch ein Mal alles Gute zur Hochzeit,</strong><br />
              Stephi, Martin, Miini und Luggi
            </p>
          </Card>
      </div>
    </Container>
  );
}

export default SuccessView; 