import React from 'react'
import { List, Segment } from 'semantic-ui-react'

const TheListList = () => (
  <Segment inverted>
    <List divided inverted relaxed>
      <List.Item>
        <List.Content >
          <List.Header>1. Burj Khalifa</List.Header><br />
          828M
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>2.Shanghai Tower</List.Header><br />632M
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>3.Makkah Clock Tower</List.Header><br />
          601M
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>4.Ping An Finance Centre</List.Header><br />
          555M
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>5.Lotte World Tower</List.Header><br />
          555M
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>6.One World Trade Center</List.Header><br />
          541.3M
        </List.Content>
      </List.Item>
      
    </List>
  </Segment>
)

export default TheListList