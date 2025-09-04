ARG IMAGE
FROM ${IMAGE} as base
WORKDIR /app
ARG MAVEN_SCRIPT
ARG CHECKOUT_DIR

RUN ls && \
    pwd  && \
    {MAVEN_SCRIPT}