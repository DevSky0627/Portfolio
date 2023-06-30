import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageSprComponentsDarkLarge from 'assets/spr-components-dark-large.png';
import imageSprComponentsDarkPlaceholder from 'assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from 'assets/spr-components-dark.png';
import imageSprComponentsLightLarge from 'assets/spr-components-light-large.png';
import imageSprComponentsLightPlaceholder from 'assets/spr-components-light-placeholder.png';
import imageSprComponentsLight from 'assets/spr-components-light.png';

import imageSprDesignSystemDarkLarge from 'assets/spr-design-system-dark-large.png';
import imageSprDesignSystemDarkPlaceholder from 'assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from 'assets/spr-design-system-dark.png';
import imageSprDesignSystemLightLarge from 'assets/spr-design-system-light-large.png';
import imageSprDesignSystemLightPlaceholder from 'assets/spr-design-system-light-placeholder.png';
import imageSprDesignSystemLight from 'assets/spr-design-system-light.png';

import dealer from 'assets/Screen/dealer.png';
import itstartechs from 'assets/Screen/itstartechs.png';
import chronimedelivery from 'assets/Screen/chronimedelivery.png';
import whocanfixmycar from 'assets/Screen/whocanfixmycar.png';
import muso from 'assets/Screen/muso.png';
import sharpcode from 'assets/Screen/sharpcode.png';
import tradermath from 'assets/Screen/tradermath.png';
import cilory from 'assets/Screen/cilory.png';
import hitchbird from 'assets/Screen/hitchbird.png';
import simulator from 'assets/Screen/simulator.png';
import kirkwhay from 'assets/Screen/kirkwhay.png';
import sendwyre from 'assets/Screen/sendwyre.png';

import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from 'assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from 'assets/spr-lesson-builder-light.jpg';
import videoSprMotionLarge from 'assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';
import videoSprMotion from 'assets/spr-motion.mp4';
import imageSprSchema1DarkLarge from 'assets/spr-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from 'assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from 'assets/spr-schema-1-dark.png';
import imageSprSchema1LightLarge from 'assets/spr-schema-1-light-large.png';
import imageSprSchema1LightPlaceholder from 'assets/spr-schema-1-light-placeholder.png';
import imageSprSchema1Light from 'assets/spr-schema-1-light.png';
import imageSprSchema2DarkLarge from 'assets/spr-schema-2-dark-large.png';
import imageSprSchema2DarkPlaceholder from 'assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from 'assets/spr-schema-2-dark.png';
import imageSprSchema2LightLarge from 'assets/spr-schema-2-light-large.png';
import imageSprSchema2LightPlaceholder from 'assets/spr-schema-2-light-placeholder.png';
import imageSprSchema2Light from 'assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from 'assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from 'assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from 'assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from 'assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from 'assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from 'assets/spr-storyboarder-light.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';

const Earth = dynamic(() => import('./Earth').then(mod => mod.Earth));
const EarthSection = dynamic(() => import('./Earth').then(mod => mod.EarthSection));

const title = 'Web & Mobile & AI';
const description =
  'My Name is Lukas, currently I live in Chile working as a Senior Full Stack Developer at Upwork. My projects include AI Machine Learning, 3D Animation Web APP, Mobile Application. I am a Full Stack Developer with React, Node, Typescript, Next and have been doing this for 7 years.';
const roles = [
  'Web Development',
  'Mobile Applocation Development',
  'Artificial Intelligence',
  'Full Stack Development',
];

export const SmartSparrow = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.smartsparrow.com/"
          roles={roles}
        />

        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprDesignSystemDark, imageSprDesignSystemDarkLarge]
                  : [imageSprDesignSystemLight, imageSprDesignSystemLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprDesignSystemDarkPlaceholder
                  : imageSprDesignSystemLightPlaceholder
              }
              alt="The homepage of the aero design system docs website linking to principles and components."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Design system docs</ProjectSectionHeading>
              <ProjectSectionText>
                A design system is useless if no one knows how to use it, so we put
                together a comprehensive documentation website to cover principles, ux,
                accessibility, and component guidelines for designers and engineers
                working with the system.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={isDark ? [dealer, dealer] : [dealer, dealer]}
              placeholder={isDark ? dealer : dealer}
              alt="Server is not running..."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>
                <Link href="https://www.dealerpilothr.com/">DealerPILOT HR</Link>
              </ProjectSectionHeading>
              <ProjectSectionText>
                <b>Vue | Nuxt | Node | Tailwind</b>
                <br />
                <br />
                DealerPILOT HR has all the tools you need to increase employee engagement,
                eliminate paperwork, improve HR processes, and reduce risk for health &
                safety programs.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={isDark ? [itstartechs, itstartechs] : [itstartechs, itstartechs]}
              placeholder={isDark ? itstartechs : itstartechs}
              alt="Server is not running..."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>
                <Link href="https://www.itstartechs.com/">IT Solutions Architect</Link>
              </ProjectSectionHeading>
              <ProjectSectionText>
                <b>React | Bootstrap | Wix</b>
                <br />
                <br />
                Technological experts that plan. Techs customize development process to
                enhance Your business goals, we help You to be ahead of Your competitors.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [chronimedelivery, chronimedelivery]
                  : [chronimedelivery, chronimedelivery]
              }
              placeholder={isDark ? chronimedelivery : chronimedelivery}
              alt="Server is not running..."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>
                <Link href="https://chronimdeliveryandlogistics.com/">
                  Chronim Delivery
                </Link>
              </ProjectSectionHeading>
              <ProjectSectionText>
                <b>Nuxt | Node | Vue | GSAP</b>
                <br />
                <br />
                Chronim Delivery & Logistics Company provides the best transport and
                shipping services all over the world. We can deliver fast & efficient
                delivery and transport services to your Industry.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [whocanfixmycar, whocanfixmycar]
                  : [whocanfixmycar, whocanfixmycar]
              }
              placeholder={isDark ? whocanfixmycar : whocanfixmycar}
              alt="Server is not running..."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>
                <Link href="https://www.whocanfixmycar.com/">Book MOT, Car Repair</Link>
              </ProjectSectionHeading>
              <ProjectSectionText>
                <b>Next | React | Node | Tailwind</b>
                <br />
                <br />
                Need a MOT, car repair or servicing near you? Compare deals online from
                15,200 rated & reviewed local garages. Get quotes from local garages
                today.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={isDark ? [muso, muso] : [muso, muso]}
              placeholder={isDark ? muso : muso}
              alt="Server is not running..."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>
                <Link href="https://www.muso.ai/">Verified Music Credits</Link>
              </ProjectSectionHeading>
              <ProjectSectionText>
                <b>Vue | Nginx | JQuery | Webflow</b>
                <br />
                <br />
                Discover over 100 million music credits on the world's first verified
                credit platform for music professionals and artists.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={isDark ? [sharpcode, sharpcode] : [sharpcode, sharpcode]}
              placeholder={isDark ? sharpcode : sharpcode}
              alt="Server is not running..."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>
                <Link href="https://www.sharpcodesolutions.com/">
                  Sharpcode Solutions
                </Link>
              </ProjectSectionHeading>
              <ProjectSectionText>
                <b>Vue | Webpack</b>
                <br />
                <br />
                We are a custom software development and IT services provider based in
                Dallas TX. We mainly focused on customized enterprise applications
                development for startups, mid-sized and large companies in various
                industries.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={isDark ? [tradermath, tradermath] : [tradermath, tradermath]}
              placeholder={isDark ? tradermath : tradermath}
              alt="Server is not running..."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>
                <Link href="https://www.tradermaths.com/">Trade Math</Link>
              </ProjectSectionHeading>
              <ProjectSectionText>
                <b>Vue | GSAP | Bootstrap | Webpack</b>
                <br />
                <br />
                Train your Mental Maths Skills. Start your Career as a trader. Sign up to
                track your progress, challenge your friends and make it to our
                leaderboard!
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={isDark ? [cilory, cilory] : [cilory, cilory]}
              placeholder={isDark ? cilory : cilory}
              alt="Server is not running..."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>
                <Link href="https://www.cilory.com/">Shop Wear Clothes</Link>
              </ProjectSectionHeading>
              <ProjectSectionText>
                <b>Vue | Nginx | WebPack</b>
                <br />
                <br />
                Cilory is one stop online shopping store for latest kids wear, mens and
                womens clothing. Buy accessories, footwear, lingerie’s, designer kurtis &
                dresses at best price.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={isDark ? [hitchbird, hitchbird] : [hitchbird, hitchbird]}
              placeholder={isDark ? hitchbird : hitchbird}
              alt="Server is not running..."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>
                <Link href="https://www.hitchbird.com/">Plan a Wedding</Link>
              </ProjectSectionHeading>
              <ProjectSectionText>
                <b>Vue | Neuxt | Nginx | Node</b>
                <br />
                <br />
                Let Hitchbird plan your perfect destination wedding anywhere in Asia.
                Compare prices and read reviews for the best destination wedding venues in
                Asia.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={isDark ? [simulator, simulator] : [simulator, simulator]}
              placeholder={isDark ? simulator : simulator}
              alt="Server is not running..."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>
                <Link href="https://simulator.rightcar.govt.nz/#/">Simulator</Link>
              </ProjectSectionHeading>
              <ProjectSectionText>
                <b>Vue | Three.js | GSAP</b>
                <br />
                <br />
                Star Safety simulator Does the Star Safety Rating really make a
                difference?
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={isDark ? [kirkwhay, kirkwhay] : [kirkwhay, kirkwhay]}
              placeholder={isDark ? kirkwhay : kirkwhay}
              alt="Server is not running..."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>
                <Link href="https://www.kirkwhayman.com/">Design Director</Link>
              </ProjectSectionHeading>
              <ProjectSectionText>
                <b>3D | Node | React | Next | BootStrap</b>
                <br />
                <br />
                Kirk is a Design Director & UI Designer focused on motion, 3D, and
                achieving results through user centered experience.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={isDark ? [sendwyre, sendwyre] : [sendwyre, sendwyre]}
              placeholder={isDark ? sendwyre : sendwyre}
              alt="Server is not running..."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>
                <Link href="https://sendwyre.com/">Wyre</Link>
              </ProjectSectionHeading>
              <ProjectSectionText>
                <b>Three.js | GSAP | React | Node | Next</b>
                <br />
                <br />
                Powerful payments APIs to connect your app or business to the blockchain
                with Wyre. Simple and secure. Fiat to crypto onramps. Wallets. Swaps.
                Transfers. Offramps. KYC. Tools to build your vision.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ThemeProvider themeId="dark" data-invert>
          <Earth
            className={styles.earth}
            hideMeshes={useMemo(
              () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
              []
            )}
            position={useMemo(() => [0, 0, 0], [])}
            labels={useMemo(
              () => [
                {
                  position: [0.54, 0.19, 0.18],
                  text: 'Pacific ring of fire',
                  hidden: true,
                },
                {
                  position: [0.47, -0.38, 0.04],
                  text: 'Ruapehu',
                  hidden: true,
                },
                {
                  position: [0.22, 0.44, -0.35],
                  text: 'St. Helens',
                  hidden: true,
                },
                {
                  position: [0.16, -0.06, 0.58],
                  text: 'Krakatoa',
                  hidden: true,
                },
                {
                  position: [0.11, 0.2, -0.56],
                  text: 'Parícutin',
                  hidden: true,
                },
                {
                  position: [0.52, 0.2, -0.23],
                  text: 'Kīlauea',
                  hidden: true,
                },
                {
                  position: [-0.24, 0.75, 0.24],
                  text: 'Mantle',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.55, 0.24],
                  text: 'Outer core',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.35, 0.24],
                  text: 'Inner core',
                  delay: 800,
                  hidden: true,
                },
              ],
              []
            )}
            scale={0.6}
          >
            <EarthSection
              scrim
              animations={['0:loop']}
              camera={[0, 0, 1.5]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent>
                  <ProjectTextRow center>
                    <ProjectSectionHeading>
                      WebGL | Three.JS | Babylon.js
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      The world of web development is changing at breakneck speed, and
                      WebGL is at the forefront of this revolution. This powerful API has
                      quickly gained traction among developers looking to create engaging
                      and interactive 3D graphics for their web applications. With its
                      ability to render complex animations and realistic environments,
                      WebGL has quickly become the go-to solution for those seeking to
                      create truly unique and immersive user experiences.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[0, 0, 2.4]}
              meshes={['Atmosphere', 'EarthFull']}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[1.14, -1.39, 0.94]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Bringing 3D into learning
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      One really cool example is the 3D screen plugin. Learning designers
                      can load any model into it and then configure camera positions to
                      animate to for each section.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.17, 0.69, -1.47]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Pacific ring of fire',
                'Ruapehu',
                'St. Helens',
                'Krakatoa',
                'Parícutin',
                'Kīlauea',
              ]}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="start" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Interactivity
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Learners can then be directed to specific parts of the model and
                      shown labels. They’re also able to click and drag to orbit around
                      and freely explore at any time.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.81, 0.51, 0.43]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Pacific ring of fire',
                'Ruapehu',
                'St. Helens',
                'Krakatoa',
                'Parícutin',
                'Kīlauea',
              ]}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['EarthPartial', 'Chunk']}
              labels={['Mantle', 'Outer core', 'Inner core']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Animation
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Learning designers can pick an animation included in the model to
                      play or loop for any section without having to use any complex
                      animation tools.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              scrimReverse
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['Atmosphere', 'EarthFull']}
            />
          </Earth>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Three. js uses a web graphics library which is also a JavaScript API that
                is used primarily for interactive 2D and 3D graphics rendering in web
                browsers without requiring any plugin. It allows the browser to render 3D
                animations smoothly.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
