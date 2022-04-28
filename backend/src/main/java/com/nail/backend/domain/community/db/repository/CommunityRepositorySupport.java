package com.nail.backend.domain.community.db.repository;

import com.nail.backend.domain.community.db.entity.QCommunity;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CommunityRepositorySupport {
    @Autowired
    JPAQueryFactory jpaQueryFactory;

    QCommunity qCommunity = QCommunity.community;

    public Long modifyCommunityCnt(Long communityCnt, Long communitySeq){
        Long execute = jpaQueryFactory.update(qCommunity)
                .set(qCommunity.communityCnt,communityCnt+1)
                .where(qCommunity.communitySeq.eq(communityCnt))
                .execute();
        return execute;
    }
}
