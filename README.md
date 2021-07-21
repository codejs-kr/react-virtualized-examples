# react-virtualized-examples

긴 목록을 가상화하세요!<br>
애플리케이션에서 긴 목록(수백 또는 수천행)을 렌더링하는 경우 ‘windowing’ 이라는 가상화 기법을 사용하여 최적화 할 수 있습니다. 이 기법은 리엑트 공식 사이트에서 추천하고 있으며,
화면에 실제로 보여지는 부분만 DOM으로 렌더링하도록 연산하여 시스템 부하와 과도하게 낭비되는 리소스를 방지 하여 더 나은 서비스를 제공할 수 있습니다.

## 일반적인 목록 vs 가상화된 목록 비교
일반적으로 목록을 많이 보여주는 화면과 react-virtualized를 사용하여 최적화 한 차이를 비교 제공합니다.
