import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

import { Container } from 'semantic-ui-react';

export default () => {
        return <div style={{paddingTop:'1em'}}>
                    <Container>
                        <CommentBox />
                        <CommentList />
                    </Container>
                </div>
        
}
