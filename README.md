# react-virtualized-examples

긴 목록 가상화로 최적화하세요!<br>
애플리케이션에서 긴 목록(수백 또는 수천행)을 렌더링하는 경우 ‘windowing’ 이라는 가상화 기법을 사용하여 최적화 할 수 있습니다. 이 기법은 [리엑트 공식 사이트에서 추천하고](https://ko.reactjs.org/docs/optimizing-performance.html#virtualize-long-lists) 있으며,
화면에 실제로 보여지는 부분만 DOM으로 렌더링하도록 연산하여 시스템 부하와 과도하게 낭비되는 리소스를 방지 하여 더 나은 서비스를 제공할 수 있습니다.

## Live Demo

http://play.codejs.co.kr/react-virtualized-examples

## 일반적인 목록 vs 가상화된 목록 비교

일반적으로 목록을 많이 보여주는 화면과 react-virtualized를 사용하여 최적화 한 차이를 비교 제공합니다.

### 텍스트 목록에 react-virtualized 적용한 모습

예제의 500개 목록 중 화면에 보이는 부분만 DOM으로 랜더링 하여 부하를 최소화 할 수 있습니다.<br>
그로 인해 API로 JSON을 받아와 렌더링 하는 최초 시간과 추가적으로 목록을 더할 때도 최소 5배 이상 빠른 결과를 얻을 수 있습니다.
![Alt text](/public/virtualized-text.gif '텍스트 목록에 virtualized 적용한 모습')

### 이미지 목록에 react-virtualized 적용한 모습

이미지가 있는 목록도 문제 없습니다.
![Alt text](/public/virtualized-image.gif '이미지 목록에 react-virtualized 적용한 모습')

## 사용된 주요 API

- List : 창에 보이는 요소만 렌더링하는 컨테이너입니다. ([문서](https://github.com/bvaughn/react-virtualized/blob/master/docs/List.md))
- CellMeasurer : 사용자가 볼 수 없는 방식으로 일시적으로 렌더링하여 셀 크기를 자동으로 측정하는 고차 구성 요소입니다. ([문서](https://github.com/bvaughn/react-virtualized/blob/master/docs/CellMeasurer.md))
- CellMeasurerCache : CellMeasurer의 결과를 부모(여기서는 List)와 공유합니다. ([문서](https://github.com/bvaughn/react-virtualized/blob/master/docs/CellMeasurer.md))
- AutoSizer : 단일 자식의 너비와 높이를 자동으로 조정하는 고차 컴포넌트입니다. ([문서](https://github.com/bvaughn/react-virtualized/blob/master/docs/AutoSizer.md))

## 적용하면 좋은 곳

- 스크롤로 무한정 늘어날 수 있는 목록
- 지속적으로 쌓이는 채팅 목록
- 지속적으로 쌓이는 알림 목록

## 공식문서

- https://github.com/bvaughn/react-virtualized
