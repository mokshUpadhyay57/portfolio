import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';
import path from 'path';

export const handler = async (event) => {
  try {
    const { title, category } = event.queryStringParameters || {};
    
    // Resolve font path relative to the current file
    const fontPath = path.resolve(__dirname, 'Inter-Bold.ttf');
    let fontData;
    
    try {
      fontData = fs.readFileSync(fontPath);
    } catch (e) {
      console.error("Font loading failed, check path:", fontPath);
      // Fallback or re-throw
      throw new Error(`Font file not found at ${fontPath}`);
    }

    const width = 1200;
    const height = 630;

    const svg = await satori(
      {
        type: 'div',
        props: {
          children: [
            {
              type: 'div',
              props: {
                children: [
                  {
                    type: 'div',
                    props: {
                      children: 'MOKSH CODES',
                      style: {
                        fontSize: 24,
                        fontWeight: 800,
                        color: '#6366f1',
                        letterSpacing: '0.1em',
                      },
                    },
                  },
                  {
                    type: 'div',
                    props: {
                      children: category || 'Project',
                      style: {
                        fontSize: 18,
                        fontWeight: 500,
                        color: '#94a3b8',
                        marginTop: 10,
                        textTransform: 'uppercase',
                      },
                    },
                  },
                ],
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                },
              },
            },
            {
              type: 'div',
              props: {
                children: title || 'Portfolio Project',
                style: {
                  fontSize: 64,
                  fontWeight: 800,
                  color: '#f8fafc',
                  lineHeight: 1.1,
                  marginTop: 40,
                  maxWidth: '800px',
                },
              },
            },
            {
              type: 'div',
              props: {
                children: 'mokshcodes.netlify.app',
                style: {
                  fontSize: 20,
                  color: '#94a3b8',
                  position: 'absolute',
                  bottom: 60,
                  left: 60,
                },
              },
            },
          ],
          style: {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#0b1121',
            padding: 60,
            position: 'relative',
          },
        },
      },
      {
        width,
        height,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
            weight: 700,
            style: 'normal',
          },
        ],
      }
    );

    const resvg = new Resvg(svg, {
      fitTo: {
        mode: 'width',
        value: width,
      },
    });

    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400',
      },
      body: pngBuffer.toString('base64'),
      isBase64Encoded: true,
    };
  } catch (error) {
    console.error('OG Image generation error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate image', details: error.message }),
    };
  }
};
