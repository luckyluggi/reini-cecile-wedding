import React from 'react';
import "./SuccessView.css"
import Card from './lib/Card';
import Container from './lib/Container';
import ecampleImage1 from "../public/images/rc-wedding-1.jpg";
import ecampleImage2 from "../public/images/rc-wedding-2.jpg";
import ecampleImage3 from "../public/images/rc-wedding-3.jpg";
import ecampleImage4 from "../public/images/rc-wedding-4.jpg";
import ecampleImage5 from "../public/images/rc-wedding-5.jpg";
import ecampleImage6 from "../public/images/rc-wedding-6.jpg";
import ecampleImage7 from "../public/images/rc-wedding-7.jpg";
import ecampleImage8 from "../public/images/rc-wedding-8.jpg";
import ecampleImage9 from "../public/images/rc-wedding-9.jpg";

import ecampleImage10 from "../public/images/rc-wedding-10.jpg";
import ecampleImage11 from "../public/images/rc-wedding-11.jpg";
import ecampleImage12 from "../public/images/rc-wedding-12.jpg";
import ecampleImage13 from "../public/images/rc-wedding-13.jpg";
import ecampleImage14 from "../public/images/rc-wedding-14.jpg";
import ecampleImage15 from "../public/images/rc-wedding-15.jpg";
import ecampleImage16 from "../public/images/rc-wedding-16.jpg";
import ecampleImage17 from "../public/images/rc-wedding-17.jpg";
import ecampleImage18 from "../public/images/rc-wedding-18.jpg";
import ecampleImage19 from "../public/images/rc-wedding-19.jpg";

import ecampleImage20 from "../public/images/rc-wedding-20.jpg";
import ecampleImage21 from "../public/images/rc-wedding-21.jpg";
import ecampleImage22 from "../public/images/rc-wedding-22.jpg";
import ecampleImage23 from "../public/images/rc-wedding-23.jpg";
import ecampleImage24 from "../public/images/rc-wedding-24.jpg";
import ecampleImage25 from "../public/images/rc-wedding-25.jpg";
import ecampleImage26 from "../public/images/rc-wedding-26.jpg";
import ecampleImage27 from "../public/images/rc-wedding-27.jpg";
import ecampleImage28 from "../public/images/rc-wedding-28.jpg";
import ecampleImage29 from "../public/images/rc-wedding-29.jpg";

import ecampleImage30 from "../public/images/rc-wedding-30.jpg";
import ecampleImage31 from "../public/images/rc-wedding-31.jpg";
import ecampleImage32 from "../public/images/rc-wedding-32.jpg";
import ecampleImage33 from "../public/images/rc-wedding-33.jpg";
import ecampleImage34 from "../public/images/rc-wedding-34.jpg";
import ecampleImage35 from "../public/images/rc-wedding-35.jpg";
import ecampleImage36 from "../public/images/rc-wedding-36.jpg";
import ecampleImage37 from "../public/images/rc-wedding-37.jpg";
import ecampleImage38 from "../public/images/rc-wedding-38.jpg";
import ecampleImage39 from "../public/images/rc-wedding-39.jpg";

import ecampleImage40 from "../public/images/rc-wedding-40.jpg";
import ecampleImage41 from "../public/images/rc-wedding-41.jpg";
import ecampleImage42 from "../public/images/rc-wedding-42.jpg";
import ecampleImage43 from "../public/images/rc-wedding-43.jpg";
import ecampleImage44 from "../public/images/rc-wedding-44.jpg";


const images = [
  ecampleImage1,
  ecampleImage2,
  ecampleImage3,
  ecampleImage4,
  ecampleImage5,
  ecampleImage6,
  ecampleImage7,
  ecampleImage8,
  ecampleImage9,
  
  ecampleImage10,
  ecampleImage11,
  ecampleImage12,
  ecampleImage13,
  ecampleImage14,
  ecampleImage15,
  ecampleImage16,
  ecampleImage17,
  ecampleImage18,
  ecampleImage19,
  
  ecampleImage20,
  ecampleImage21,
  ecampleImage22,
  ecampleImage23,
  ecampleImage24,
  ecampleImage25,
  ecampleImage26,
  ecampleImage27,
  ecampleImage28,
  ecampleImage29,
  
  ecampleImage30,
  ecampleImage31,
  ecampleImage32,
  ecampleImage33,
  ecampleImage34,
  ecampleImage35,
  ecampleImage36,
  ecampleImage37,
  ecampleImage38,
  ecampleImage39,
  
  ecampleImage40,
  ecampleImage41,
  ecampleImage42,
  ecampleImage43,
  ecampleImage44,
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