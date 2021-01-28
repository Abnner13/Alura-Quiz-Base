import React from 'react';
import Widget from '../Widget';
import Answer from '../Answer';

export default function LoadingWidget() {
    return (
        <Widget>
            <Widget.Header>
                Carregando...
            </Widget.Header>

            <Widget.Content>
                <Answer src="http://img1.joyreactor.com/pics/post/rhino-animals-colors-loading-2193299.gif" />
            </Widget.Content>
        </Widget>
    );
}
