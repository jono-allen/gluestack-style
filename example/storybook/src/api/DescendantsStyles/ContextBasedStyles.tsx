import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  Pressable as RNPressable,
  Text as RNText,
  StyleSheet,
  View,
} from 'react-native';
import {
  AsForwarder,
  createStyled,
  styled1,
  Theme,
} from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
import { AddIcon, Box, Icon } from '@gluestack/design-system';
// import { AddIcon } from '@gluestack/design-system';
import { AlertCircle, Circle, Sun } from 'lucide-react-native';

import { AnimationResolver } from '@gluestack-style/animation-plugin';

const styled = createStyled([new AnimationResolver({})]);
const styleshet = StyleSheet.create({
  style: {
    padding: 12,
  },
});
const Pressable = styled(
  RNPressable,
  {
    bg: '$red500',
    p: '$2',

    // 'bg': '$red600',
    // 'w': 100,
    // 'h': 100,
    // '_light': {
    //   bg: '$red600',
    // },
    // '@base': {
    //   bg: '$blue500',
    // },
    // ':hover': {
    //   bg: '$red500',
    // },
    // '@sm': {
    //   props: {
    //     test: 'sm',
    //   },
    // },
    // _dark: {
    //   // bg: '$amber200',
    //   props: {
    //     bg: 3 < 2 ? '$yellow400' : 'blue',
    //   },
    // },

    // '@xl': {
    //   props: {
    //     bg: '$green500',
    //   },
    // },

    // 'props': {
    //   bg: '$blue400',
    //   // test: 'hello',
    // },
  },
  {
    componentName: 'Pressable',
    // descendantStyle: ['_text'],
  }
);

const Pressable1 = styled(
  Pressable,
  {
    bg: '$red500',
    p: '$2',

    // 'bg': '$red600',
    // 'w': 100,
    // 'h': 100,
    // '_light': {
    //   bg: '$red600',
    // },
    // '@base': {
    //   bg: '$blue500',
    // },
    // ':hover': {
    //   bg: '$red500',
    // },
  },
  {
    componentName: 'Pressable',
    // descendantStyle: ['_text'],
  }
);

const Text = styled(
  RNText,
  {},
  {
    componentName: 'Text',
  }
);

const StyledIcon = styled(
  AsForwarder,
  {
    bg: '$red500',
    variants: {
      size: {
        sm: {
          width: 10,
          height: 10,
          // props: {
          //   size: 32,
          // },
        },
        md: {
          // props: {
          //   size: 32,
          // },
          width: '$4',
          height: '$4',
        },
        lg: {
          // props: {
          //   size: 32,
          // },
          width: '$6',
          height: '$6',
        },
      },
    },
  },
  {
    componentName: 'MyIcon',
  }
);

const MyIcon = styled(
  StyledIcon,
  {
    props: {
      size: 'md',
    },
  },
  {
    componentName: 'MyNewIcon',
  }
);

// console.log(
//   MyIcon.isComposedComponent,
//   MyIcon.isStyledComponent,
//   // MyNewIcon.isComposedComponent,
//   // MyNewIcon.isStyledComponent,
//   'composed here'
// );

const Box1 = styled(
  View,
  {
    // bg: '$amber400',
    // h: 100,
    // w: 100,
    // _dark: {
    //   props: {
    //     bg: '$red500',
    //   },
    // },
    _text: {
      color: '$red500',
    },
  },
  {
    descendantStyle: ['_text'],
  }
);

const Text1 = styled(Text, {}, { ancestorStyle: ['_text'] });
export function ContextBasedStyles() {
  return (
    <Wrapper colorMode="dark">
      <MyIcon as={Sun} size={32}></MyIcon>
      {/* <ContextBasedStylesContent></ContextBasedStylesContent> */}
      {/* <Pressable></Pressable> */}
      {/* <Box1
        sx={{
          'bg': '$amber400',
          'h': 100,
          'w': 100,
          // '_dark': {
          'props': {
            bg: '$red500',
            // },
          },
          // },
          ':hover': {
            bg: '$green400',
          },
          '_text': {
            props: {
              color: '$white',
            },
          },
        }}
        states={{ hover: true }}
      >
        <Text1>Hello</Text1>
      </Box1> */}
      {/* <MyIcon bg="$blue500" size="sm" />
      <StyledIcon as={MyIcon} bg="$red500" size="sm" /> */}
    </Wrapper>
  );
}

export function ContextBasedStylesContent() {
  // return <MyFlatList></MyFlatList>;

  const [tabName, setTabName] = useState(true);
  const [state, setState] = useState(false);

  const handleTabChange = (tabName: any) => {
    setTabName(tabName);
  };

  // const color = tabName ? '$red500' : '$green500';
  // return (
  //   <>
  //     {/* <Theme name={'modern'}>
  //       <Box states={{ hover: true }}></Box>
  //     </Theme>
  //     <Box states={{ hover: true }}></Box> */}
  //     {/* <Icon as={Circle} size="md" color="$red500" />
  //     <Pressable
  //       onPress={() => {
  //         handleTabChange(!tabName);
  //       }}
  //       bg="$amber400"
  //       h="$50"
  //       w="$50"
  //     >
  //       <Text
  //         sx={{
  //           _dark: {
  //             color: tabName ? '$red500' : '$green500',
  //           },
  //         }}
  //       >
  //         hello world
  //       </Text>
  //     </Pressable> */}
  //   </>
  // );

  // return (
  //   <>
  //     <MyNewIcon as={AlertCircle} size="sm"></MyNewIcon>
  //   </>
  // );
  return (
    <>
      <RNPressable
        onPress={() => {
          setState(!state);
        }}
        style={{
          height: 50,
          width: 200,
          backgroundColor: 'red',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <Text style={{ color: 'black' }}>{state ? 'Unmount' : 'Mount'}</Text>
      </RNPressable>
      {/* <MyPressable>
        <RNText>Hello</RNText>
      </MyPressable> */}
      {/* {state && <MyList />
      } */}
      {/* <Box pointerEvents="none" style={{ display: state ? 'flex' : 'none' }}> */}
      {state && <MyList />}
      {/* </Box> */}
    </>
  );
}

const renderItem = (item: any) => (
  <Pressable
    key={item}
    // sx={{
    //   bg: '$amber400',
    // }}
  >
    {/* <RNText>{item}</RNText> */}
  </Pressable>
);

const renderItem2 = (item: any) => (
  <RNPressable key={item} style={styleshet.style}>
    {/* <RNText>{item}</RNText>r */}
  </RNPressable>
);

const MyList = React.memo(() => {
  const time = React.useRef(Date.now());
  useEffect(() => {
    console.log(Date.now() - time.current, '>>>');
  }, []);
  const data = useMemo(
    () =>
      Array(1)
        .fill(0)
        .map((_, index) => `Item ${index}`),
    []
  );

  return <>{data.map(renderItem)}</>;
});
export default ContextBasedStyles;
