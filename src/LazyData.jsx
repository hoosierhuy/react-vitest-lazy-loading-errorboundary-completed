// import { useEffect, useState } from 'react'

function LazyData() {
  // const [isLoaded, setIsLoaded] = useState(false)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoaded(true)
  //   }, 500)

  //   return () => clearTimeout(timer)
  // }, [])

  // if (!isLoaded) {
  //   return <div>Taylor Swift is coming for us all...</div>
  // }

  const records = Array(2000)
    .fill()
    .map((_, index) => {
      const uniqueKey = `record-${index}-${Math.random().toString(36).substring(2, 11)}`
      return (
        <div
          style={{
            border: '1px solid gray',
            borderRadius: '5px',
            marginBottom: '1rem',
            padding: '1rem',
            background: `hsla(${index * 30}, 60%, 80%, 1)`,
          }}
          key={uniqueKey}
        >
          <p>
            Record {index + 1}: surprise indie the last great american dynasty
            easter egg label I swear I don't love the drama, it loves me tour
            film snow on the beach producer casette tracklist co-writer Red
            promo Swift blondie tour quill deluxe squad Target Exclusive era
            Woulda Shoulda Coulda Max Martin 3am soft album solo cats Cats twang
            remix era solo glitter gel pen co-writer Red 3am song debut country
            tracklist exile queue remix tracklist tour film Hot 100 album
            folklore record Haim Grammy piano vinyl critics folklore bonus the 1
            [From the Vault] refrigerator light rock London song co-writer
            surprise evermore Tim McGraw the last great american dynasty tour
            film signer Fearless cottagecore snow on the beach betty Our Song
            country Taylor Haim the last great american dynasty snake 3am James
            glitter gel pen Cardigan country snow on the beach 3am Eras Tour
            fame Long Pong Sessions reputation label Haim record private jet 3am
            masters critics solo 13 era queue 22 Aaron Dressner Aaron Dressner
            Swift cottagecore signer fuck the patriarchy Max Martin Marjorie pop
            songwriter 3am album of the year i had a marvelous time ruining
            everything august song surprise soft Woulda Shoulda Coulda tour
            clock debut James Tim McGraw remix no, it's becky Lover Fest cats
            Taylah pop Speak Now Lover Fest tour Nashville glitter gel pen
            co-writer Delicate indie easter egg cats 22 blondie Grammy country
            Eras Tour Haim rock masters Willow Aaron Dressner Red Long Pong
            Sessions Cats single tour film country Cats swiftie presale Swift
            promo no, it's becky Alison guitar music video vocals songwriter era
            director Target Exclusive 1989 song solo vocalist cats Alison snow
            on the beach soft album Cats Haim tracklist fame presale Aaron
            Dressner deluxe songwriter clock 1989 mezzo-soprano exile sexy baby
            farm co-writer private jet Cats (10 Minute Version) easter egg Aaron
            Dressner exile Taylah Cardigan debut Jack Antonoff song record snake
            indie snake 22 Max Martin lyrics folk folk reputation masters (10
            Minute Version) Taylah song Nashville Our Song music video the last
            great american dynasty queue Tim McGraw bonus deluxe All Too Well
            swiftie piano Haim quill folklore indie James era vocals 3am stained
            glass windows in my mind casette Elvira Midnight Rain artist [From
            the Vault] label pop album presale masters vocals fountain pen
            Target Exclusive vocals farm masters betty vocals fuck the
            patriarchy tour masters Grammy Long Pong Sessions label James James
            rollout soft Lover Fest Grammy cats Nashville Elvira solo
            cottagecore folk folk Hot 100 1989 fans co-writer Haim rollout song
            Nashville 1989 remix music video Lover guitar song bonus snow on the
            beach Nashville guitar stadium piano Long Pong Sessions
          </p>
        </div>
      )
    })

  // Flip simulateError to true to test the error boundary in Data.jsx
  const simulateError = false

  if (simulateError) {
    throw new Error('Simulated error for testing purposes')
  }

  return <div>{records}</div>
}

export default LazyData
