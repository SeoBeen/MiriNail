package com.nail.backend.domain.authentication.db.entity;

import com.nail.backend.domain.user.db.entity.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ApiModel(value = "DesignerApplication", description = "디자이너 등록 신청 정보")
public class DesignerApplication implements Serializable {

    @Id
    @Column(name = "designer_seq")
    Long designerSeq;

    @MapsId
    @ApiModelProperty(value = "유저 정보")
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "designer_seq", referencedColumnName = "user_seq")
    private User user;

    // 유저 사업자 등록증
    @ApiModelProperty(value = "유저 사업자등록증 url")
    String designerCertification;

    // 디자이너 샵 이름
    @ApiModelProperty(value = "유저 디자이너 샵 이름")
    String designerShopName;

    // 디자이너 샵 주소
    @ApiModelProperty(value = "유저 디자이너 샵 주소")
    String designerAddress;

    // 디자이너 전화번호
    @ApiModelProperty(value = "디자이너 전화번호")
    String designerTel;

    // 인증 신청 상태
    @ApiModelProperty(value = "유저 인증신청 상태 0 : 진행중, 1 : 승인 , 2 : 거절")
    int designerAuthStatus;

    // 인증신청 등록날짜
    @ApiModelProperty(value = "인증신청 등록날짜")
    @CreatedDate
    LocalDateTime designerRegedAt;
}
