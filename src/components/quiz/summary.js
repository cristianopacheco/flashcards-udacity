import React from 'react'

import {
  Text,
  Button,
  Body,
  Card,
  CardItem,
  H2,
  Left,
  Right
} from 'native-base'

const Summary = ({ backToDeck, restartQuiz }) => (
  <Card>
    <CardItem>
      <Body style={{ alignItems: 'center' }}>
        <Text>
          <H2>89% Correct answers</H2>
        </Text>
      </Body>
    </CardItem>
    <CardItem footer>
      <Left>
        <Button transparent onPress={backToDeck}>
          <Text>Back to Deck</Text>
        </Button>
      </Left>
      <Right>
        <Button transparent onPress={restartQuiz}>
          <Text>Restart Quiz</Text>
        </Button>
      </Right>
    </CardItem>
  </Card>
)

export default Summary