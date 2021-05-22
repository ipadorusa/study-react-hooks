# React Study 하면서 기록하는 메모 파일

## Hook 종류

- 기본 Hook
  - useState
  - useEffect
  - useContext
- 추가 Hook
  - useReducer
  - useCallback
  - useMemo
  - useRef
  - useImperativeHandle
  - useLayoutEffect
  - useDebugValue

### State Hook

this.state에서 useState() Hook으로 변경

## Effect Hook

- Effect Hook, 즉 useEffect는 함수 컴포넌트 내에서 이런 side effects를 수행할 수 있게 해줍니다.
- React class의 componentDidMount 나 componentDidUpdate, componentWillUnmount와 같은 목적으로 제공되지만, 하나의 API로 통합된 것입니다. (useEffect와 이 세 가지 메서드를 비교하는 예시가 Using the Effect Hook 문서에 있습니다.)
