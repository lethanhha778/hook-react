import { Card } from 'antd';
import React from 'react';
import { Col, Row } from 'antd';
const { Meta } = Card;

export default function AntdDemo() {
    return (
        <Row gutter={[48, 16]}>
            <Col span={8}>col-8</Col>
            <Col span={8}>
                <Card
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>

            </Col>
            <Col span={8}>
                col-8
            </Col>
        </Row>
    )
}
