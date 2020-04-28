import React, { Component } from 'react'
import { Button, Icon, Label, Divider, Header, Container, Input, Dropdown, Grid } from 'semantic-ui-react';

export default class Main extends Component {
    render() {
        const ButtonSimple = () => <div>
            <Button className='temp' primary content='Главная' />
            <button class='temp'>{'.  123   .'}</button>
            <Button floated='right' compact color='red' content='Второстепенная' />
            <Button floated='left' compact content='Помучать 1' />
            <Button fluid compact color='green' content='Помучать 2' />
            <Button inverted compact color='yellow' content='Помучать 3' />
            <Button label='123' labelPosition='left' compact color='black' content='Помучать 4' />
            <Button loading compact color='purple' content='.' />
            <Button size='big' compact color='brown' content='PUSH ME' />
            <Button primary active size='massive' compact color='yellow' content='ПОМУЧАТЬ' />
            <Button size='small' compact color='olive' content='Помучать 8' />
            <Button disabled size='tiny' compact color='pink' content='Помучать 9' />
            <Button size='mini' primary color='amazon' icon='amazon' content='Помучать 10' />
        </div>
        const ButtonAnim = () => <div>
            <Button animated>
            <Button.Content visible content='Next' />
            <Button.Content hidden>
                <Icon name="arrow alternate circle right" />
            </Button.Content>
            </Button>
            <Button animated='vertical'>
            <Button.Content hidden content='SHOP' />
            <Button.Content visible>
                <Icon name='shop' />
            </Button.Content>
            </Button>
        </div>

        const ButtonLabeled = () => <div>
            <Button
            content='Like'
            icon='heart'
            label={{content: '2,048'}}
            labelPosition='left' />
            <Button
            content='Fork'
            color='red'
            icon='fork'
            label={{as:'a', content:'333', pointing:'none', color:'red'}}
            labelPosition='left' />
            <Button
            content='World'
            icon='world'
            label='2,048'
            labelPosition='right' />
        </div>

        const ButtonIcon = () => <div>
            <Button icon='world' loading circular/>
            <Button content='.' loading/>
            <Button icon='' loading />
            <Button icon={{name:'pause'}} content='Pause' labelPosition='left'/>
            <Button icon={{name:'arrow right'}} content='Next' labelPosition='right'/>
        </div>

        const ButtonGroup = () => <div>
            <Button.Group vertical
            buttons={[
                {content:'FIRST', color:'red', compact:'true'},
                {content:'SECOND', color:'green', compact:'true'},
                {content:'THIRD', color:'blue', compact:'true'},
                {content:'FOURTH', color:'black', compact:'true'},
            ]} />
        </div>

        const IconGroup = () => <div>
            <Button.Group widths='5' color='blue'
            buttons={[
                {icon: 'align left', key: 'align left'},
                {icon: 'align right', key: 'align right'},
                {icon: 'align center', key: 'align center'},
            ]} />{'  '}
            <Divider />
            <Button.Group widths='3' basic
            buttons={[
                {icon: 'bold', key: 'bold'},
                {icon: 'underline', key: 'underline'},
                {icon: 'text width', key: 'text width'},
            ]} />
        </div>

        const ButtonCond = () => <div>
            <Button.Group>
            <Button content='FIRST' />
            <Button.Or text='или' />
            <Button content='SECOND' />
            </Button.Group>
        </div>

        const HeaderExample = () => <div>
            <Header
            as='h2'
            // icon
            image={{src:'https://react.semantic-ui.com/images/avatar/large/patrick.png', circular:'true'}}
            textAlign='center'
            content='John'
            />
            <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>Friends</Header.Content>
        </Header>
        </div>

        const ContainerSampleOne = () => <div>
            <Container text fluid textAlign='justified'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quis tenetur optio beatae molestias rerum labore modi, sunt, consequatur repellat quo et quibusdam. Magnam doloremque amet iusto optio, non aliquam ipsa eligendi alias aut inventore laboriosam vitae facere doloribus atque ad enim, nesciunt magni dicta neque perspiciatis! Ab, animi quo pariatur optio temporibus autem eaque odit. Totam dolor fuga quod odio ipsam sed voluptates? In quae deserunt odio magnam, neque minima velit iusto deleniti id corrupti reprehenderit alias facilis. Distinctio quod explicabo quos? Ex dolorum officiis, consequuntur voluptatibus, quidem itaque temporibus corrupti nisi cumque rerum debitis aspernatur eum, perspiciatis dolores eius. Eum perspiciatis provident quidem odio sit amet atque dolor sed quo ad? Aspernatur sapiente ex, asperiores adipisci fuga corporis laborum? Architecto vero placeat libero odit magni reprehenderit debitis eum totam eos dolor perferendis enim earum nobis cum, blanditiis veritatis, asperiores rerum ullam at. Totam amet praesentium odit, harum voluptatem temporibus modi minus sapiente, nulla voluptate nihil! Quasi nulla, impedit totam unde officiis quidem quis ullam laborum blanditiis rem beatae vel provident, delectus eligendi inventore ipsum, itaque nisi. Porro fuga atque itaque repellat. A facilis, mollitia totam dicta ea quia debitis quam eveniet odio, dignissimos reprehenderit nemo quibusdam unde distinctio?
            </p>
            <p>
            Многие люди, сталкивающиеся с FUI / SUI (я буду использовать эти сокращения в этой статье, чтобы не повторять себя с целыми именами каждый раз. Они, очевидно, означают Fomantic UI / Semantic UI), быстро сталкиваются с проблемой при любой настройке, и это именно то, что случилось с мне.</p>
            </Container>
        </div>

        const InputExample = () => <div>
            <Input size='mini' loading placeholder='Search...' />
        </div>

        const colors = [  'red','orange','yellow','olive','green',
        'teal','blue','violet','purple','pink','brown','grey','black',]
        const LabelsExample = () => <div>
            {colors.map( color => <Label circular color={color} key={color} content='2' /> )}
        </div>

        const countryOptions = [
            { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
            { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
            { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
            { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
            { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
            { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
            { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
            { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
            { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
            { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
            { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
            { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
            { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
            { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
            { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
            { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
            { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
            { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
            { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
            { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
            { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
            { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
            { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
        ]
        const options = [
            { key: 1, text: 'Choice 1', value: 1 },
            { key: 2, text: 'Choice 2', value: 2 },
            { key: 3, text: 'Choice 3', value: 3 }
        ];
        const DropdownExample = () => <Dropdown 
            placeholder='Select country' search selection
            options={options} />

        const GridExample = () => <Grid columns={3}>
            <Grid.Row>
                <Grid.Column>123</Grid.Column>
                <Grid.Column>456</Grid.Column>
                <Grid.Column>7890</Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>222</Grid.Column>
                <Grid.Column>3333</Grid.Column>
                <Grid.Column>44444</Grid.Column>
            </Grid.Row>
        </Grid>


        return (
            <div>
                <h1>Main page</h1>
                <ButtonSimple />
                <ButtonAnim />
                <ButtonLabeled />
                <div style={{display:'flex',flexFlow: 'row nowrap'}}><ButtonGroup /><ButtonIcon /></div>
                <IconGroup />
                <div style={{width:'400px'}}><GridExample /></div>
                <InputExample />
                <ButtonCond />
                <DropdownExample />
                <HeaderExample />
                <LabelsExample />
                <p>Welcome to the main page!!!!!</p>
            </div>
        )
    }
}
